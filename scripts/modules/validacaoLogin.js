export default function login() {
    let formLogin = document.querySelector('#container-login')
    let loginEmail = document.querySelector('#loginEmail')
    let loginSenha = document.querySelector('#loginSenha')
    function verificaUsuario(event) {
        event.preventDefault()
        if (loginEmail.value == localStorage.getItem('email') && loginSenha.value == localStorage.getItem('senha')){
            setTimeout(() => {
                window.location.href = '/index.html'
            }, 1000)
        }
    }

    if (formLogin) {
        formLogin.addEventListener('submit', verificaUsuario)
    }
}