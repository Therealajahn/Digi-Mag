document.cookie = "promo_shown=1; Max-Age=2600000; SameSite=None; Secure"
console.log('document.cookie:', document.cookie)


let startButton = document.getElementsByClassName('leaves-button')[0];
let leaves = document.getElementsByClassName('leaves')[0];
let waste = document.getElementsByClassName('waste-days')[0];
let toggle = false;

startButton.addEventListener('click', ()=>{
    
    console.log('yes')
    if(!toggle){
        leaves.play()
        waste.play()
    }else{
        leaves.pause();
        waste.pause();
    }
    toggle = !toggle;
    console.log('toggle', toggle)

})

    

