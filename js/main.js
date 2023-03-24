let usrDate=document.getElementById("birthdate");
let showDate=document.getElementById("date");
let showMonth=document.getElementById("month");
let showYear=document.getElementById("year");
let showDateHead=document.getElementById("date-head");
let showMonHead=document.getElementById("mon-head");
let showYrHead=document.getElementById("yr-head");
let wish=document.getElementById("wish");

let current=new Date();
let crtDate=current.getDate();
let crtMon=current.getMonth()+1;
let crtYear=current.getFullYear();

function run(){
	let birthDate=new Date(usrDate.value);
	let date=birthDate.getDate();
	let month=birthDate.getMonth()+1;
	let year=birthDate.getFullYear();
	let calDate=Math.abs(parseInt(crtDate)-parseInt(date));
	let calMon=Math.abs(parseInt(crtMon)-parseInt(month));
	let calYr=Math.abs(parseInt(crtYear)-parseInt(year));
    if(year!==crtYear && year<crtYear){
			showDate.style.display= "block";
			showDateHead.style.display= "block";
			showDate.value=calDate;
			showMonth.style.display= "block";
			showMonHead.style.display= "block";
			showMonth.value=calMon;
			showYear.style.display= "block";
			showYrHead.style.display= "block";
			showYear.value=calYr;
	}
	else{
		if(month!==crtMon && year===crtYear){
			showDate.style.display="block";
			showDateHead.style.display="block";
			showDate.value=calDate;
			showMonth.style.display="block";
			showMonHead.style.display="block";
			showMonth.value=calMon;
		}
		else if(month===crtMon && date!==crtDate){
			showDate.style.display="block";
			showDateHead.style.display="block";
			showDate.value=calDate;
		}
		else if(year===crtYear && month===crtMon && date===crtDate){
			wish.innerHTML="Happy Birthday";
		}
	}
	if((date===crtDate && month===crtMon) && year!==crtYear){
		showYear.style.display= "block";
		showYrHead.style.display= "block";
		showYear.value=calYr;
		wish.innerHTML="Happy Birthday";
	}
	else if(year>crtYear){
		alert("This is next year compare to this year");
		usrDate.value="";
	}
}

let clearData=document.getElementById("clear");
clearData.addEventListener("click",function (){
	usrDate.value="";
	showDate.value="";
	showMonth.value="";
	showYear.value="";
	showDate.style.display= "none";
	showDateHead.style.display= "none";
	showMonth.style.display= "none";
	showMonHead.style.display= "none";
	showYear.style.display= "none";
	showYrHead.style.display= "none";
	wish.setAttribute("class","hide");
})