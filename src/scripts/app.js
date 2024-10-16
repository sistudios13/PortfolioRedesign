var app = document.getElementById('type-name');

var typewriter = new Typewriter(app, {
    loop: false,
    cursor: '',
    delay: 75
    
});

if (window.innerWidth > 500) {
    typewriter
    .typeString('SimonPapp')
    .deleteChars(4)
    .typeString(' Papp')
    .start()
    
}

else {
    typewriter
    .typeString('Simon Papp')
    .start()
}

