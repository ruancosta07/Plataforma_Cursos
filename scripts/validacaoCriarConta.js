window.addEventListener('DOMContentLoaded', () => {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    let verSenha1 = document.getElementById('ver-senha1')
    let esconderSenha1 = document.getElementById('esconder-senha1')
    let verSenha2 = document.getElementById('ver-senha2')
    let esconderSenha2 = document.getElementById('esconder-senha2')
    let confirmaSenha = document.getElementById('confirma-senha')
    let termos = document.getElementById('termos')
    let campoNome = document.querySelector('.campo-nome')
    let campoEmail = document.querySelector('.campo-email')
    let campoSenha = document.querySelector('.campo-senha')
    let campoConfirmaSenha = document.querySelector('.campo-confirmar-senha')
    let campoCheck = document.querySelector('.campo-check')
    let form = document.querySelector('form')
    let aviso1 = document.createElement('span')
    aviso1.innerText = 'Preencha o campo acima'
    aviso1.classList.add('text-red-600', 'font-medium', 'mt-2', 'block')
    let aviso2 = aviso1.cloneNode(true)
    let aviso3 = aviso1.cloneNode(true)
    let aviso4 = aviso1.cloneNode(true)
    let aviso5 = aviso1.cloneNode(true)
    let avisoEmail = document.getElementById('aviso-email')
    let avisoCheck = aviso1.cloneNode(true)
    avisoCheck.classList.add('col-span-full')
    avisoCheck.innerText = 'Marque a opção acima'
    let controle1 = false
    let controle2 = false
    let controle3 = false
    let controle4 = false
    let controle5 = false

    function verificaCampoVazio(input, campo, aviso) {
        if (input.value == '') {
            campo.appendChild(aviso)
        }
    }

    function removeAvisoFocus(campo, aviso) {
        if (campo.contains(aviso)) {
            campo.removeChild(aviso)
        }
    }

    function adicionaAviso(input, campo, aviso) {
        if (input.value == '') {
            campo.appendChild(aviso)
        }
    }

    function controleNome() {
        let nomeValue = nome.value
        if (nomeValue.length > 0) {
            controle1 = true
        }
        else {
            controle1 = false
        }
    }


    function validaEmail() {
        let emailValue = email.value
        avisoEmail.classList.remove('hidden')
        avisoEmail.classList.add('text-red-600', 'font-medium')
        let pontoCom = '.com'
        let pontoBr = '.br'
        let arroba = '@'
        if (emailValue.includes(pontoBr) || emailValue.includes(pontoCom)) {
            if (emailValue.includes(arroba)) {
                avisoEmail.innerText = 'Email válido'
                avisoEmail.classList.replace('text-red-600', 'text-green-600')
            }

        }
        else {
            avisoEmail.innerText = 'Digite um email válido'
        }
        controle2 = true
    }

    function substituiEspacoEmail() {
        let emailValue = email.value
        emailValue = emailValue.replace(/[ ]/g, '')
        email.value = emailValue
    }

    function verSenha(input, ver, esconder) {
        input.type = 'text'
        ver.classList.add('hidden')
        esconder.classList.remove('hidden')
    }

    function esconderSenha(input, ver, esconder) {
        input.type = 'password'
        ver.classList.remove('hidden')
        esconder.classList.add('hidden')
    }

    if (verSenha1) {
        verSenha1.addEventListener('click', () => {
            verSenha(senha, verSenha1, esconderSenha1)
        })
    }
    if (esconderSenha1) {
        esconderSenha1.addEventListener('click', () => {
            esconderSenha(senha, verSenha1, esconderSenha1)
        })
    }

    if (verSenha2) {
        verSenha2.addEventListener('click', () => {
            verSenha(confirmaSenha, verSenha2, esconderSenha2)
        })
    }

    if (esconderSenha2) {
        esconderSenha2.addEventListener('click', () => {
            esconderSenha(confirmaSenha, verSenha2, esconderSenha2)
        })
    }

    function validacaoSenha() {
        let senhaValue = senha.value
        let regexNumeros = /[0-9]/
        let regexMaiuscula = /[A-Z]/
        let caracteres = document.getElementById('caracteres')
        let maiuscula = document.getElementById('maiuscula')
        let numeros = document.getElementById('numeros')
        caracteres.classList.remove('hidden')
        maiuscula.classList.remove('hidden')
        numeros.classList.remove('hidden')
        senhaValue = senhaValue.replace(/[ ]/g, '')
        senha.value = senhaValue

        if (senhaValue.length >= 8) {
            caracteres.classList.replace('text-red-600', 'text-green-600')
            caracteres.querySelector('i').classList.replace('ri-close-circle-line', 'ri-checkbox-circle-line')
            controle3 = true
        }
        else {
            caracteres.classList.replace('text-green-600', 'text-red-600')
            caracteres.querySelector('i').classList.replace('ri-checkbox-circle-line', 'ri-close-circle-line')
            controle3 = false
        }
        if (regexMaiuscula.test(senhaValue) == true) {
            maiuscula.classList.replace('text-red-600', 'text-green-600')
            maiuscula.querySelector('i').classList.replace('ri-close-circle-line', 'ri-checkbox-circle-line')
            controle3 = true
        }
        else {
            maiuscula.classList.replace('text-green-600', 'text-red-600')
            maiuscula.querySelector('i').classList.replace('ri-checkbox-circle-line', 'ri-close-circle-line')
            controle3 = false
        }

        if (regexNumeros.test(senhaValue) == true) {
            numeros.classList.replace('text-red-600', 'text-green-600')
            numeros.querySelector('i').classList.replace('ri-close-circle-line', 'ri-checkbox-circle-line')
            controle3 = true
        }
        else {
            numeros.classList.replace('text-green-600', 'text-red-600')
            numeros.querySelector('i').classList.replace('ri-checkbox-circle-line', 'ri-close-circle-line')
            controle3 = false
        }

    }

    function verificaSenhasIguais() {
        let coincidem = document.getElementById('senhas-coincidem')
        coincidem.classList.remove('hidden')
        let confirmaSenhaValue = confirmaSenha.value
        confirmaSenhaValue = confirmaSenhaValue.replace(/[ ]/g, '')
        confirmaSenha.value = confirmaSenhaValue
        if (confirmaSenhaValue != '' && confirmaSenhaValue == senha.value) {
            coincidem.classList.replace('text-red-600', 'text-green-600')
            coincidem.innerHTML = "<i class=ri-close-circle-line mr-1></i>As senhas são iguais"
            coincidem.querySelector('i').classList.replace('ri-close-circle-line', 'ri-checkbox-circle-line')
            controle4 = true
        }
        else {
            coincidem.classList.replace('text-green-600', 'text-red-600')
            coincidem.innerHTML = '<i class="ri-close-circle-line mr-1"></i>As senhas não são iguais'
            controle4 = false
        }

    }

    function verificaTermos() {
        if (termos.checked == true) {
            controle5 = true
        }
        else {
            document.querySelector('.campo-checkbox').appendChild(avisoCheck)
            controle5 = false
        }
    }

    function envioFormulario(event) {
        event.preventDefault()
        verificaCampoVazio(nome, campoNome, aviso1)
        verificaCampoVazio(email, campoEmail, aviso2)
        verificaCampoVazio(senha, campoSenha, aviso3)
        verificaCampoVazio(confirmaSenha, campoConfirmaSenha, aviso4)
        verificaTermos()
        console.log(controle1, controle2, controle3, controle4, controle5);
        if (controle1 === true && controle2 === true && controle3 === true && controle4 === true && controle5 === true) {
            document.querySelector('#submit').innerText = 'CRIANDO CONTA...'
            setTimeout(() => {
                document.querySelector('#submit').innerText = 'CONTA CRIADA!'
                setTimeout(() => {
                    window.location.href = 'http://127.0.0.1:5500/login.html'
                }, 2000)
            }, 1000)
        }
    }
    if (form) {
        form.addEventListener('submit', envioFormulario)
    }
    if (nome) {
        nome.addEventListener('keyup', controleNome)
        nome.addEventListener('focusin', () => {
            removeAvisoFocus(campoNome, aviso1)
        })
        nome.addEventListener('focusout', () => {
            adicionaAviso(nome, campoNome, aviso1)
        })
    }

    if (email) {
        email.addEventListener('focusout', () => {
            if (campoEmail.contains(avisoEmail) && campoEmail.contains(aviso2)) {
                campoEmail.removeChild(aviso2)
            }
        })
        email.addEventListener('keyup', validaEmail)
        email.addEventListener('focusout', substituiEspacoEmail)
        email.addEventListener('focusin', () => {
            removeAvisoFocus(campoEmail, aviso2)
        })
        email.addEventListener('focusout', () => {
            adicionaAviso(email, campoEmail, aviso2)
        })
    }

    if (termos) {
        termos.addEventListener('change', () => {
            if (document.querySelector('.campo-checkbox').contains(avisoCheck)) {
                document.querySelector('.campo-checkbox').removeChild(avisoCheck)
            }
        })
    }
    if (senha) {
        senha.addEventListener('keyup', validacaoSenha)
        senha.addEventListener('focusin', () => {
            removeAvisoFocus(campoSenha, aviso3)
        })
        senha.addEventListener('focusout', () => {
            adicionaAviso(senha, campoSenha, aviso3)
        })
    }
    if (campoConfirmaSenha) {
        campoConfirmaSenha.addEventListener('keyup', verificaSenhasIguais)
    }
    if (confirmaSenha) {
        confirmaSenha.addEventListener('focusin', () => {
            removeAvisoFocus(campoConfirmaSenha, aviso4)
        })
    }


})




