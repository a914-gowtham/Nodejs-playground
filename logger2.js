const EventEmitter= require('events');
const { emit } = require('process');

var url = 'http://api.me/'

class Logger extends EventEmitter{
    log(message){
        //send a HTTP request
        console.log(message);
this.emit('messageLogger',{id: 11,url: url})
    }



}

module.exports = Logger