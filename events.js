const EventEmitter=require('events')
const emitter = new EventEmitter()

console.log('event listener registered')
//Register a listener
emitter.on('messageLogged',function(arg){
    console.log('message log called,',arg.id)
})

emitter.on('messageLogged',(arg)=>{
    console.log('message log called 2',arg.id)
})

console.log('event emitted')
//Raise a event
emitter.emit('messageLogged',{ id: 1,url: 'http://'})