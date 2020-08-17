document.cookie = "promo_shown=1; Max-Age=2600000; SameSite=None; Secure"
console.log('document.cookie:', document.cookie)


let startButton1 = document.getElementsByClassName('begin')[0];
let startButton2 = document.getElementsByClassName('begin')[1];
let leaves = document.getElementsByClassName('leaves')[0];
let waste = document.getElementsByClassName('waste-days')[0];
let toggle = false;


function controlAudioVisual(){
   
    if(!toggle){
        leaves.play()
        waste.play()
        startButton1.innerHTML = 'Stop Things(click this)';
        startButton2.innerHTML = 'Stop Things(click this)';
    }else{
        leaves.pause();
        waste.pause();
        startButton1.innerHTML = 'Begin Things(click this)';
        startButton2.innerHTML = 'Begin Things(click this)';
    }
    toggle = !toggle;
}

startButton1.addEventListener('click', ()=>{
    controlAudioVisual();
})

startButton2.addEventListener('click', ()=>{
    controlAudioVisual();
})
    

