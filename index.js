const mario = document.querySelector('.mario');
// cria a constante mario que puxa o mario do html
const pipe = document.querySelector('.pipe');


const jump = () => {
    // cria a constante jump que adiciona o elemento jump ao mario, o que faz a animação jump acontecer
    mario.classList.add('jump');

    setTimeout( ()=> {
        //cria um delay entre a execução de uma função, ou seja, primeiro executa a função abaixo e depois pula um certo periodo de tempo
        mario.classList.remove('jump');

    },750)
}

document.addEventListener('keydown', jump);

const loop = setInterval( ()=> {
    //mesma coisa do anterior, mas este recebe uma função e depois quanto tempo no qual essa função será executada 
    const pipePosition = pipe.offsetLeft;
    // define a distancia dele para o lado esquerdo

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    // captura a posição do mario com base na sua altura, "pega estilo computado" o + transforma um numero em forma de string em um int 

    if(pipePosition <=125 && pipePosition > 0 && marioPosition < 110){
        // verifica se o pipe esta numa posição onde pode bater no mario e se o mario pulou
        //se essa condição for verdadeira o mario bateu no pipe e perdeu o jogo

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        // para o pipe

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        // para o mario

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

},10)