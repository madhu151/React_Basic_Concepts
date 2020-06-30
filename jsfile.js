var eventEmitter = require('events').EventEmitter;
var event = new eventEmitter();

event.addListener('first', function (data) {
    console.log('First listenerrrrrrrrrrrrr: ' + data);
});
event.on('first', function(data){
    console.log('dataaaaaaaaaaa', data)
});
event.emit('first', 'hi...........')
setTimeout(function(){
    event.removeListener('first', function(){})
event.emit('first', 'hello.................')
}, 1000)

