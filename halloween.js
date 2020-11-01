let buttonSusto = document.querySelector('.button-susto');
let aliceMacabra = document.querySelector('.alice-macabra');
let header = document.querySelector('header');
let main = document.querySelector('main');
let screaming = document.querySelector('.screaming');
let bottonHome = document.querySelector('.home')
let trilha = document.querySelector('.audio-trilha')


buttonSusto.addEventListener('click', function(){
    aliceMacabra.style.display = 'flex';
    header.style.display = 'none';
    main.style.display = 'none';
    trilha.pause();
    screaming.play();
})

bottonHome.addEventListener('click', function(){
    aliceMacabra.style.display = 'none';
    header.style.display = 'block';
    main.style.display = 'block';
    trilha.play();
    screaming.pause();
})