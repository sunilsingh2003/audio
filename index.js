for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonClick = this.innerHTML;
        makeSound(buttonClick);
        makeAnimation(buttonClick);

    });
   



}
function makeSound(key) {
    switch (key) {
        case "a":
            let juktaNahi = new Audio("sound/juhktaNahi.aac");
            juktaNahi.play();
    
            break;
        case "b":
            let bhookLagi = new Audio("sound/bhookLagi.aac");
            bhookLagi.play();
    
            break;
        case "c":
            let nendAaRahi = new Audio("sound/nendAaRahi.aac");
            nendAaRahi.play();
    
            break;
        case "d":
            let tvChalo = new Audio("sound/tvChalo.aac");
            tvChalo.play();
    
            break;
    
        default:
            break;
    
    }
}
function makeAnimation(currentKey) {
    let activeKey= document.querySelector("."+currentKey);
    activeKey.classList.add("pressed")
 setTimeout(function(){
     activeKey.classList.remove("pressed")
 },200);
 }