export default function login() {
    let formLogin = document.querySelector('#container-login')
    let loginEmail = document.querySelector('#loginEmail')
    let loginSenha = document.querySelector('#loginSenha')
    function verificaUsuario() {
        if (loginEmail.value == sessionStorage.getItem('email') && loginSenha.value == sessionStorage.getItem('senha')) {
            slacarai()
            valido()
            setTimeout(() => {
                window.location.href = '/index.html'
            }, 1000)
        }
    }

    function eventoForm(event) {
        event.preventDefault()
        verificaUsuario()
    }

    if (formLogin) {
        formLogin.addEventListener('submit', eventoForm)
    }
}