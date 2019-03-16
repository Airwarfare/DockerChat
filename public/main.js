console.log('Hello Docker!');
var Username = ""; //Current Username, TODO: check the server for currently taken usernames, (Maybe add an account system with and api?)
do{
    Username = prompt("Please enter your username");
}while(Username == null || Username == "" ); //Make sure the user give us an input

var socket = io();


//Recieve message from the server
socket.on('clientmessage', function(msg) {
    console.log(msg);
    AddMessage(msg);
});

//Adds a message to the list
function AddMessage(msg) {
    $('#chatmessagebox').append($('<li>').text(msg)); //Add message to support bottom to top
}