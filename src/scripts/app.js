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

var type = document.getElementById('type-phrase');

var typewriter1 = new Typewriter(type, {
    loop: true,
    cursor: '',
    delay: 75
    
});



typewriter1
    .typeString('Developer')
    .deleteAll()
    .typeString('Problem Solver')
    .deleteAll()
    .typeString('Web Architect')
    .deleteAll()
    .typeString('Full-stack Enthusiast')
    .deleteAll()
    .typeString('Creative Thinker')
    .deleteAll()
    .start()


