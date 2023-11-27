window.addEventListener('DOMContentLoaded', () => {
    let video = document.querySelector('.video');
    let buttonPlay = document.querySelector('.play')
    let buttonPause = document.querySelector('.pause')
    let voltaVideo = document.querySelector('.volta-video')
    let avancaVideo = document.querySelector('.avanca-video')
    let progressBar = document.querySelector('.progress-bar')
    let progressContainer = document.querySelector('.progress-container')
    let controls = document.querySelector('.controls')

    function play() {
        video.play();
        buttonPause.classList.remove('hidden')
        buttonPlay.classList.add('hidden')
    }

    function pause() {
        video.pause();
        buttonPlay.classList.remove('hidden')
        buttonPause.classList.add('hidden')
    }

    buttonPlay.addEventListener('click', () => {
        play()
    })

    buttonPause.addEventListener('click', () => {
        pause()
    })

    function avanca() {
        video.currentTime += 5
    }

    function volta() {
        video.currentTime -= 5
    }

    if (avancaVideo) {
        avancaVideo.addEventListener('click', avanca)
    }
    if (voltaVideo) {
        voltaVideo.addEventListener('click', volta)
    }

    function atualizaBarraProgresso() {
        let value = (video.currentTime / video.duration) * 100
        progressBar.style.width = value + '%'
    }
    function avancaVideoBarra(e) {
        let porcentagem = e.offsetX / progressContainer.offsetWidth
        video.currentTime = porcentagem * video.duration
    }
    var timeDisplay = createTimedisplay();
    progressContainer.appendChild(timeDisplay);
    function showTimeOnHover(e) {
        let percent = e.offsetX / progressContainer.offsetWidth;
        let currentTime = percent * video.duration;
        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        let formattedTime = padNumber(minutes) + ":" + padNumber(seconds);

        timeDisplay.innerText = formattedTime;
        positionTimeDisplay(e.clientX, progressContainer.getBoundingClientRect().left);
    }


    function createTimedisplay() {
        var timeDisplay = document.createElement('div');
        timeDisplay.classList.add('time-display');

        var timeSpan = document.createElement('span');
        timeDisplay.appendChild(timeSpan);

        return timeDisplay;
    }

    function positionTimeDisplay(mouseX, containerLeft) {
        var positionX = mouseX - containerLeft;
        timeDisplay.style.left = positionX + 'px';

        // Exibir o elemento somente quando o mouse estiver sobre a barra de progresso
        if (positionX >= 0 && positionX <= progressContainer.offsetWidth) {
            timeDisplay.style.display = 'block';
        } else {
            timeDisplay.style.display = 'none';
        }
    }

    function padNumber(number) {
        return (number < 10 ? '0' : '') + number;
    }

    let volumeContainer = document.querySelector('.volume-container')
    let volumeBar = document.querySelector('.volume-bar')

    function setVolume(e) {
        let percent = e.offsetY / volumeContainer.offsetHeight;
        video.volume = percent;
        volumeBar.style.height = percent * 100 + '%';
    }

    function updateVolumeBar(e) {
        let percent = e.offsetY / volumeContainer.offsetHeight;
        volumeBar.style.height = percent * 100 + '%';
        console.log(video.volume);
    }

    volumeBar.style.height = '100%'



    volumeContainer.addEventListener('click', setVolume)
    volumeContainer.addEventListener('click', updateVolumeBar)

    video.addEventListener('timeupdate', atualizaBarraProgresso)
    video.addEventListener('mouseenter', () => {
        document.querySelector('.controls').classList.replace('hidden', 'flex')
    })
    video.addEventListener('mouseleave', () => {
        document.querySelector('.controls').classList.replace('flex', 'hidden')
        volumeControle.classList.replace('grid', 'hidden')
        opcoes.classList.replace('grid', 'hidden')
    })

    controls.addEventListener('mouseenter', () => {
        document.querySelector('.controls').classList.replace('hidden', 'flex')
    })
    controls.addEventListener('mouseleave', () => {
        document.querySelector('.controls').classList.replace('flex', 'hidden')
    })

    progressContainer.addEventListener('click', avancaVideoBarra)
    progressContainer.addEventListener('mousemove', createTimedisplay)
    progressContainer.addEventListener('mousemove', positionTimeDisplay)
    progressContainer.addEventListener('mousemove', showTimeOnHover)
    progressContainer.addEventListener('mouseleave', () => {
        timeDisplay.style.display = 'none'
    })

    video.addEventListener('click', () => {
        if (!buttonPlay.className.includes('hidden')) {
            play()
        }
        else if (!buttonPause.className.includes('hidden')) {
            pause()
        }
    })


    window.addEventListener('keydown', (tecla) => {
        if (tecla.keyCode == 32) {
            if (!buttonPlay.className.includes('hidden')) {
                tecla.preventDefault()
                play()
            }
            else if (!buttonPause.className.includes('hidden')) {
                tecla.preventDefault()
                pause()
            }
        }
    })

    



    window.addEventListener('keydown', (tecla) => {
        if (tecla.key == 'ArrowRight') {
            avanca()
        }
    })

    window.addEventListener('keydown', (tecla) => {
        if (tecla.key == 'ArrowLeft') {
            volta()
        }
    })
    let velocidade075 = document.querySelector('.velocidade-075')
    let velocidade050 = document.querySelector('.velocidade-050')
    let velocidadenormal = document.querySelector('.velocidade-normal')
    let velocidade125 = document.querySelector('.velocidade-125')
    let velocidade150 = document.querySelector('.velocidade-150')
    let velocidade175 = document.querySelector('.velocidade-175')
    let velocidade200 = document.querySelector('.velocidade-200')


    velocidade050.addEventListener('click', () => {
        if (video.playbackRate == 1) {
            video.playbackRate -= 0.5
        }
        if (video.playbackRate >= 1 || video.playbackRate < 1) {
            video.playbackRate = 0.5
        }
        console.log(video.playbackRate);
    })

    velocidade075.addEventListener('click', () => {
        if (video.playbackRate == 1) {
            video.playbackRate -= 0.25
        }
        if (video.playbackRate >= 1 || video.playbackRate < 0.75) {
            video.playbackRate = 0.75
        }
        console.log(video.playbackRate);
    })

    velocidadenormal.addEventListener('click', () => {
        if (video.playbackRate < 1 || video.playbackRate > 1) {
            video.playbackRate = 1
        }
    })

    velocidade125.addEventListener('click', () => {
        if (video.playbackRate == 1) {
            video.playbackRate += 0.25
        }
        if (video.playbackRate > 1.25) {
            video.playbackRate = 1.25
        }
    })
    velocidade150.addEventListener('click', () => {
        if (video.playbackRate == 1) {
            video.playbackRate += 0.5
        }
        if (video.playbackRate >= 1.50 || video.playbackRate <= 1.50) {
            video.playbackRate = 1.50
        }
    })
    velocidade175.addEventListener('click', () => {
        if (video.playbackRate == 1) {
            video.playbackRate += 0.75
        }
        if (video.playbackRate >= 1.75 || video.playbackRate <= 1.75) {
            video.playbackRate = 1.75
        }
    })
    velocidade200.addEventListener('click', () => {
        if (video.playbackRate == 1) {
            video.playbackRate += 1.0
        }
        if (video.playbackRate >= 2.00 || video.playbackRate <= 2.00) {
            video.playbackRate = 2.00
        }
    })

    let opcoesVelocidade = document.querySelectorAll('.opcoes span')
    function teste(event) {
        opcoesVelocidade.forEach((el) => {
            el.classList.remove('opcoes-ativo')
        })
        let atual = event.currentTarget
        event.currentTarget = atual
        atual.classList.add('opcoes-ativo')

    }
    opcoesVelocidade.forEach((el) => {
        el.addEventListener('click', teste)
    })
    let ativaConfig = document.querySelector('#ativa-config')
    let ativaVolume = document.querySelector('#ativa-volume')
    let volumeControle = document.querySelector('.volume-controle')
    let opcoes = document.querySelector('.opcoes')

    ativaConfig.addEventListener('click', () => {
        if (opcoes.className.includes('hidden')) {
            opcoes.classList.replace('hidden', 'grid')
        }
        else if (opcoes.className.includes('grid')) {
            opcoes.classList.replace('grid', 'hidden')
        }
    })

    opcoes.addEventListener('mouseleave', () => {
        opcoes.classList.replace('grid', 'hidden')
    })

    ativaVolume.addEventListener('click', () => {
        if (volumeControle.className.includes('hidden')) {
            volumeControle.classList.replace('hidden', 'grid')
        }
        else if (volumeControle.className.includes('grid')) {
            volumeControle.classList.replace('grid', 'hidden')
        }

    })

    volumeControle.addEventListener('mouseleave', () => {
        volumeControle.classList.replace('grid', 'hidden')
    })

})

