
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
})

var contacts = document.getElementById("contacts");
var text = document.getElementById("text");
var add = document.getElementById("add");

add.addEventListener("click", function(){
    var newMessage = document.createElement("li");
    newMessage.innerHTML = text.value;
    messages.appendChild(newMessage);
    text.value = "";
})