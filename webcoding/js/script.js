const kirby = document.querySelector('.kirby');
const pipe = document.querySelector('pipe')

const jump = ( ) => {
    kirby.classList.add('jump');
    
    setTimeout(() => {
        kirby.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const kirbyposition = +window.getComputedStyle(kirby).bottom.replace('px',' ');
    
    
    
    if(pipePosition <= 70 && pipePosition > 0 && kirbyposition < 100) {
        pipe.style.animation = 'none';
        pipe.style.Left = `${pipePosition}px`;
        
        kirby.style.animation = 'none';
        kirby.style.Left = `${pipePosition}px`;

        clearInterval(loop);

    }
}, 10)


document .addEventListener('keydown', jump);
