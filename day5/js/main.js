var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();


var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

var meridian = "am";

if(hours >=noon){
    meridian = "pm";
}

var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
clock.innerText = clockTime;
changeImage();
}


showCurrentTime();

function ChangeImage(){
    var time = new Date().getHours();
    console.log(time);
}

var image = "img/ds_clock.png";
var imageHTML = document.getElementById("timeImage");

if(time == wakeuptime){
    image= "img/morning.gif";
    console.log(morning);
}
else if(time == dstime){
    image = "img/class.gif";
}
else if(time == sleeptime){
    image = "img/night.gif";
}

function updateClock(){
    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
    wakeuptime = wakeUpTimeSelector.value;
    var dsTimeSelector = document.getElementById('dsTimeSelector');
    dstime = dsTimeSelector.value;
    var sleepTimeSelector = document.getElementById('sleepTimeSelector');
    sleeptime = sleepTimeSelector.value;
}
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", updateClock);

















