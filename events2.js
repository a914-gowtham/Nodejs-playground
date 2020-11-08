const EventEmitter = require('events')

const Logger = require('./logger2')

const logger= new Logger()

//register listener
logger.on('messageLogger',(args)=>{
    console.log("message",args);
})

logger.log('messafe')