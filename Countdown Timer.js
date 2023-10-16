function start(){
   document.getElementById('demo').innerHTML = 'Countdown Begins'

   var endtime = new Date("oct 20, 2023 13:05:00").getTime();
   var interval = setInterval(() => calculatetime(endtime),1000);

   var stop = document.getElementById('stop');
   stop.addEventListener('click', () => {
      document.getElementById('demo').innerHTML = 'Stop'
      clearInterval(interval);
 })
}

function calculatetime(endtime){
var now = new Date().getTime();
var diff = endtime - now;

var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((diff % (1000 * 60)) / (1000));

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('mints').innerHTML = minutes;
document.getElementById('secs').innerHTML = seconds;

if (diff < 0) { 
      document.getElementById('demo').innerHTML = 'Time Over!'
      document.getElementById('days').innerHTML = '0';
      document.getElementById('hours').innerHTML = '0';
      document.getElementById('mints').innerHTML = '0';
      document.getElementById('secs').innerHTML = '0';
   
   }
}

function reset(){
   document.getElementById('demo').innerHTML = 'Countdown Timer'
   document.getElementById('days').innerHTML = '0';
   document.getElementById('hours').innerHTML = '0';
   document.getElementById('mints').innerHTML = '0';
   document.getElementById('secs').innerHTML = '0';
}


       