
const EventEmitter = require('events');
const emitter = new EventEmitter();


//Register a Listener
emitter.on('messageLogged',(arg) => {
    console.log('Listener called',arg);
})


//Raise a Event
emitter.emit('messageLogged',{ id: 1, url: 'http://' });


