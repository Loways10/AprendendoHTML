const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump'); /* adiciona a class jump no mario, ativa depois do keydown */

    setTimeout(() => {

        mario.classList.remove('jump'); /* remover a classe criada acima para que a animação possa se repetir */

    }, 500); /*500 é o tempo especificado no css*/ 
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');  /* consegue pegar qualquer propriedade que estiver dentro do mario, o + computa string em numeros, replace troca o px por nada */
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <=  80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; /* posição da parada do piper */
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px` /* mario congela assim que bate no tubo */

        mario.src = 'assets/img/game-over.png'; /* chamando a img do game over */
        mario.style.width = '75px' /* consertando o tamanho da imagem */
        mario.style.marginLeft = '50px' /* consertando a margem da imagem */

        clearInterval(loop);
    }
    
}, 10);

document.addEventListener('keydown', jump); /* keydown é qualquer botão, logo quando apertar qualquer botão do teclado ele ativa a classe jump */ 