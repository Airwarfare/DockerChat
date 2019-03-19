console.log('Hello Docker!');
var Username = ""; //Current Username, TODO: check the server for currently taken usernames, (Maybe add an account system with and api?)
do{
    Username = prompt("Please enter your username", "Airwarfare");
}while(Username == null || Username == "" ); //Make sure the user give us an input

//https://stackoverflow.com/a/23095818
//Thanks again stackoverflow (Random RGB Generator)
function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}
var CurrentColor = random_rgb()
var socket = io();


//Recieve message from the server
socket.on('clientmessage', function(msg) {
    console.log(msg);
    AddMessage(msg);
});

//Adds a message to the list
function AddMessage(msg) {
    $('#chatmessagebox').append($('<li style="padding: 2px;font-size: 20px;padding-left:40px">' + msg + "</li>").clone()); //Add message to support bottom to top
}

//https://stackoverflow.com/a/9964945
//Thanks to stack overflow for this one
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}

$("#messageinput").enterKey(function() { //Get enter key on the message input
    socket.emit('message', '<span style=\"color:' + CurrentColor + '\">' + Username + '</span>: ' + $("#messageinput").val()); //send it to the server
    $('#messageinput').val('');
})