const circle = document.querySelector("circle");
const length = circle.getTotalLength();



const sun = document.querySelector('.timer__icon--sun');
const moon = document.querySelector('.timer__icon--moon');


setInterval(function(){
  var date = new Date();
  var format = "YYYY-MMM-DD DDD";
  dateConvert(date,format)
}, 1);

function dateConvert(dateobj,format) {
 let today = document.querySelector(".timer__date");
 let time = document.querySelector(".timer__time");
 var year = dateobj.getFullYear();
 var month= ("0" + (dateobj.getMonth()+1)).slice(-2);
 var date = ("0" + dateobj.getDate()).slice(-2);
 var hours = ("0" + dateobj.getHours()).slice(-2);
 var minutes = ("0" + dateobj.getMinutes()).slice(-2);
 var seconds = ("0" + dateobj.getSeconds()).slice(-2);
 var day = dateobj.getDay();
 var months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
 var converted_date = "";
  var converted_time = "";

  switch(format){
   case "YYYY-MM-DD":
    converted_date = year + "-" + month + "-" + date;
    break;
  case "YYYY-MMM-DD DDD":
    converted_date = year + "-" + months[parseInt(month)-1] + "-" + date
    + " ";
      converted_time = hours + ":" + minutes + ":" + seconds
    break;
  }

  today.innerHTML = converted_date;
  time.innerHTML = converted_time;
  
  if (hours >= 7 && hours <= 19) {
    sun.style.display = 'none';
    moon.style.display = 'block';
  } else {
    sun.style.display = 'block';
    moon.style.display = 'none';
  }
  
}





