export default function trocaModo() {
    let modoClaro = document.getElementById('claro');
    let modoEscuro = document.getElementById('escuro');
    let todosTextos = document.querySelectorAll('.text-gray-13')
    let todosParagafos = document.querySelectorAll('.text-gray-12')
    modoClaro.checked = localStorage.getItem('modoClaro') === 'true';
    modoEscuro.checked = localStorage.getItem('modoEscuro') === 'true';

    if (!modoClaro.checked && !modoEscuro.checked) {
        modoClaro.checked = true;
    }

    aplicarEstiloModoSelecionado();

    modoClaro.addEventListener('change', () => {
        modoEscuro.checked = false;
        if (modoClaro.checked) {
            document.querySelector('#label-escuro').classList.remove('hidden')
            document.querySelector('#label-claro').classList.add('hidden')
            document.querySelector('header').classList.replace('bg-gray-1', 'bg-gray-13')
            document.querySelector('#nav-mobile').classList.replace('bg-gray-1', 'bg-gray-13')
            todosTextos.forEach((el) => {
                el.classList.replace('text-gray-13', 'text-gray-1')
            })
            todosParagafos.forEach((el) => {
                el.classList.replace('text-gray-12', 'text-gray-6')
            })
            document.querySelector('body').classList.replace('bg-gray-2', 'bg-gray-14');
            document.querySelector('#cursos-accordion').classList.replace('bg-gray-4', 'bg-gray-12');
            document.querySelector('#cursos-accordion2').classList.replace('bg-gray-4', 'bg-gray-12');
            document.querySelector('.menu-hamburguer').classList.add('invert')
            document.querySelectorAll('.categoria').forEach((categoria) => {
                categoria.classList.add('invert')
            })
        }
        salvaModo();
    });

    modoEscuro.addEventListener('change', () => {
        modoClaro.checked = false;
        if (modoEscuro.checked) {
            document.querySelector('#label-claro').classList.remove('hidden')
            document.querySelector('#label-escuro').classList.add('hidden')
            document.querySelector('header').classList.replace('bg-gray-13', 'bg-gray-1')
            document.querySelector('#nav-mobile').classList.replace('bg-gray-13', 'bg-gray-1')
            todosTextos.forEach((el) => {
                el.classList.replace('text-gray-1', 'text-gray-13')
            })
            todosParagafos.forEach((el) => {
                el.classList.replace('text-gray-6', 'text-gray-12')
            })
            document.querySelector('body').classList.replace('bg-gray-14', 'bg-gray-2');
            document.querySelector('#cursos-accordion').classList.replace('bg-gray-12', 'bg-gray-4');
            document.querySelector('#cursos-accordion2').classList.replace('bg-gray-12', 'bg-gray-4');
            document.querySelector('.menu-hamburguer').classList.remove('invert')
            document.querySelectorAll('.categoria').forEach((categoria) => {
                categoria.classList.remove('invert')
            })
        }
        salvaModo();
    });

    function salvaModo() {
        localStorage.setItem('modoClaro', `${modoClaro.checked}`);
        localStorage.setItem('modoEscuro', `${modoEscuro.checked}`);
    }

    function aplicarEstiloModoSelecionado() {
        if (modoClaro.checked) {
            document.querySelector('#label-escuro').classList.remove('hidden')
            document.querySelector('#label-claro').classList.add('hidden')
            document.querySelector('header').classList.replace('bg-gray-1', 'bg-gray-13')
            document.querySelector('#nav-mobile').classList.replace('bg-gray-1', 'bg-gray-13')
            todosParagafos.forEach((el) => {
                el.classList.replace('text-gray-12', 'text-gray-6')
            })
            todosTextos.forEach((el) => {
                el.classList.replace('text-gray-13', 'text-gray-1')
            })
            document.querySelector('body').classList.replace('bg-gray-2', 'bg-gray-14');
            document.querySelector('#cursos-accordion').classList.replace('bg-gray-4', 'bg-gray-12');
            document.querySelector('#cursos-accordion2').classList.replace('bg-gray-4', 'bg-gray-12');
            document.querySelector('.menu-hamburguer').classList.add('invert')
            document.querySelectorAll('.categoria').forEach((categoria) => {
                categoria.classList.add('invert')
            })

        } else if (modoEscuro.checked) {
            document.querySelector('#label-claro').classList.remove('hidden')
            document.querySelector('#label-escuro').classList.add('hidden')
            document.querySelector('header').classList.replace('bg-gray-13', 'bg-gray-1')
            document.querySelector('#nav-mobile').classList.replace('bg-gray-13', 'bg-gray-1')
            todosParagafos.forEach((el) => {
                el.classList.replace('text-gray-6', 'text-gray-12')
            })
            todosTextos.forEach((el) => {
                el.classList.replace('text-gray-1', 'text-gray-13')
            })
            document.querySelector('.menu-hamburguer').classList.remove('invert')
            document.querySelector('body').classList.replace('bg-gray-14', 'bg-gray-2');
            document.querySelector('#cursos-accordion').classList.replace('bg-gray-12', 'bg-gray-4');
            document.querySelector('#cursos-accordion2').classList.replace('bg-gray-12', 'bg-gray-4');
                        document.querySelectorAll('.categoria').forEach((categoria)=>{
                categoria.classList.remove('invert')
            })
        }
    }
}
