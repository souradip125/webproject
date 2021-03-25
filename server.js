
const express=require('express')
const socket=require('socket.io')
const port=process.env.PORT||4000
const app=express()

const server=app.listen(port,()=>{
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

