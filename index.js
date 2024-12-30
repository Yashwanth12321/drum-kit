var buttonss = document.querySelectorAll(".drum").length

for (var i = 0; i < buttonss; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML)
        buttonAnimation(this.innerHTML)

    });



}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    const sounds = {
        'w': "sounds/crash.mp3",
        'a': "sounds/kick-bass.mp3",
        's': "sounds/snare.mp3",
        'd': "sounds/tom-1.mp3",
        'j': "sounds/tom-2.mp3",
        'k': "sounds/tom-3.mp3",
        'l': "sounds/tom-4.mp3"
    };

    if (sounds[key]) {
        var a = new Audio(sounds[key]);
        a.play();
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 300)
}