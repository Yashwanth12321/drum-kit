var buttonss=document.querySelectorAll(".drum").length

for (var i = 0; i < buttonss; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    makeSound(this.innerHTML)
    buttonAnimation(this.innerHTML)
        
    });
    


}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
            case 'w':
                var a= new Audio("sounds/crash.mp3")
                a.play()   
                break;
            case 'a':
                var a= new Audio("sounds/kick-bass.mp3")
                a.play()  
            case 's':
                var a= new Audio("sounds/snare.mp3")
                a.play()  
            case 'd':
                var a= new Audio("sounds/tom-1.mp3")
                a.play()  
            case 'j':
                var a= new Audio("sounds/tom-2.mp3")
                a.play()
            case 'k':
                var a= new Audio("sounds/tom-3.mp3")
                a.play()  
            case 'l':
                var a= new Audio("sounds/tom-4.mp3")
                a.play()                
            default:
                break;
    }
}

function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },300)
}