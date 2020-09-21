clock();
setInterval(clock,1000);

function clock() {
    const hrs = document.getElementById('hours');
    const date = document.getElementById('date');
    const min = document.getElementById('mins');
    const seconds = document.getElementById("seconds");
    const std = document.getElementById("std")

    const currentDate = new Date();
    const hrss = currentDate.getHours();
    const minss = currentDate.getMinutes();
    const sec = currentDate.getSeconds();
    hrs.innerText = day(hrss);
    min.innerText = formatTime(minss);
    seconds.innerText = formatTime(sec);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    var dayName = days[currentDate.getDay()];
    date.innerText = dayName+" "+currentDate.getDate()+" "+currentDate.toLocaleString('default', { month: 'long' }) +" "+currentDate.getFullYear();
    if(hrss >= 12) {
        std.innerText = "PM";
    }
    else {
        std.innerText = "Am";
    }
    
}
function formatTime(time) {
    return time < 10 ? '0'+time : time;
}

function day(hand) {
    if(hand > 12) {
        hand = hand - 12;
        return hand < 10 ? '0'+hand : hand;
    }
    else {
       return hand;
    }
    
    
}