
const express=require('express')
const socket=require('socket.io')

const app=express()

const server=app.listen(4000,()=>{
console.log('hey running')
})


app.use(express.static('public'))
const io=socket(server)
io.on('connection',function(socket)
{
    console.log('mde socket connection',socket.id)

//handle Chat events
    socket.on("chat",function(data)
    {
        io.sockets.emit('chat',data)
    })


    socket.on('typing',function(data)
    {
        socket.broadcast.emit('typing',data)
    })



})


/*


const io=require('socket.io')(3000)
io.on('connection',socket=>{
    console.log('new user')
    socket.emit('chat-message','hello world');
})
*/

