var app = document.getElementById('type-name');

var typewriter = new Typewriter(app, {
    loop: false,
    cursor: ''
    
});

typewriter
    .typeString('Simon')
    .pauseFor(700)
    .typeString(' Papp')
    .start()
    