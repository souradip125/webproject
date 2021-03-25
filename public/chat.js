const socket=io.connect('http://localhost:'+port)
//DOM
const handle=document.getElementById('handle')
const message=document.getElementById('message')
const btn=document.getElementById('send')
const output=document.getElementById('output')
const feedback=document.getElementById('feedback')
const chatwindow=document.getElementById('chatwindow')
const bglogo=document.getElementById('bglogo')


//when someone click
//emit events
btn.addEventListener('click',function()
{
    if(handle.value=="")
    window.alert('Enter Your Name To Send Messages')
    if(message.value=="")
    window.alert('You cant send Empty Message')
    if(message.value!="" && handle.value!="")
    {

   // socket.emit('name of message',what the actual message is)//
socket.emit('chat',{
    message:message.value,
    handle:handle.value,
    
})
}


})

socket.on('chat',function(data){
    const d=new Date()
    feedback.innerHTML=""
    message.value=""
    let t=('0'+d.getMinutes()).slice(-2)
    console.log(data)
    output.innerHTML+='<p><strong>'+data.handle+'</strong>'+' : <br>   '+ data.message+'<br>'+'<span>'+d.getHours()+' : '+t + '</span>'+'</p><br>'
    chatwindow.style.display="block"
   chatwindow.scrollTop=chatwindow.scrollHeight
   
   
    
})





//////////////////////////Listen for evenets
message.addEventListener('keypress',function()
{
socket.emit('typing',handle.value)
})


socket.on('typing',function(data){
    feedback.innerHTML='<p><em>'+data+' is typing...</em></p>'
})


let colors=["white","deeppink","orange","orangred","grey","purple","springgreen","yellow","gold"]

//change background
function changebg()
{

    let q=colors[Math.floor(Math.random()*colors.length+1)];
    chatwindow.style.background=q
    bglogo.style.background=q
    
}