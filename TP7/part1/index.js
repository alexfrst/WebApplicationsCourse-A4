const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.get('/coucou', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', (socket) => {
    console.log("connected")
    socket.on('chat message',(msg)=>{
        console.log(msg)
        io.emit('chat message',msg)
    })
});


io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

http.listen(3000,()=>{
    console.log("starting");
})