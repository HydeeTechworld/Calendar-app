
let date=new Date().getDate();
let month="OCT";
if(date==1){
alert("Happy New Month!");
month="NOV";
};
let day=new Date().getDay();
let week="SUN";
if(day==1){
week="MON";
}else if(day==2){
week="TUE";
}else if(day==3){
week="WED"
}else if(day==4){
week="THU"
}else if(day==5){
week="FRI";
}else if(day==6){
alert("Happy Weekend!");
week="SAT";
}else if(day==0){
alert("Happy New Week!");
week="SUN"
}
let year=new Date().getFullYear();
document.getElementById("date").innerHTML=date;
document.getElementById("month").innerHTML=month;
document.getElementById("day").innerHTML=day;
document.getElementById("week").innerHTML=week;
document.getElementById("year").innerHTML=year;
