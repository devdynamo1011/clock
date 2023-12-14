let hdail = document.getElementById('h-dial');
let mdail = document.getElementById('m-dial');
let sdail = document.getElementById('s-dial');
let digital_time = document.getElementById('digital-time');
let digital_date = document.getElementById('digital-date');

let months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
let days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

let dt;
function myClock(){
    dt = new Date();
    console.log(dt);
    sdail.style.transform = `rotate(${dt.getSeconds()*6}deg)`;
    mdail.style.transform = `rotate(${dt.getMinutes()*6}deg)`;
    hdail.style.transform = `rotate(${(dt.getHours()*30)+(dt.getMinutes()*0.5)}deg)`;
    digital_time.innerHTML = `${dt.getHours()%12}:${dt.getMinutes()}`;
    digital_date.innerHTML = `${days[dt.getDay()]} ${months[dt.getMonth()].slice(0,3)},${dt.getDate()}`;
}

setInterval(myClock,1000);