console.log('Day', new Date().getDay(), 'Hour', new Date().getHours(), 'Minute', new Date().getMinutes());

let div = document.createElement('div');
div.id = "sp-wrapper";
document.body.appendChild(div);


var dy = 5;
var hr = 19;
var mn = 26;
var offAir = 2000;
let annoucement_div = document.createElement("div");
annoucement_div.className = "sp-announcement-banner";
annoucement_div.style.backgroundColor= "rgb(32,33,36)";
annoucement_div.style.display= "flex";
let anc_content = document.createElement("div");
anc_content.className = "sp-announcement-content";
anc_content.style.fontFamily = "Open Sans, Arial, Helvetica, sans-serif";
anc_content.style.fontSize = "16px";
anc_content.style.color = "white";
lbi = setInterval(liveStart, 1000);
function messegeDiv(msg) {
	if (document.getElementsByClassName("sp-announcement-banner").length === 0){
	anc_content.innerHTML = msg;
	annoucement_div.appendChild(anc_content);
	document.getElementById("sp-wrapper").prepend(annoucement_div);
	} else {
	anc_content.innerHTML = msg;
	}
}
function liveStart() {
	if(new Date().getDay() === dy && parseInt(`${new Date().getHours()}${new Date().getMinutes()}`) < offAir){
	// Messege going live here...
	messegeDiv('En vivo a las 10am por <a href="http://www.avivamehd.tv">AvivameHD.tv<\/a>');
	clearInterval(lbi);
	lni = setInterval(liveNow, 1000);
	}
}
function liveNow() {
	if(parseInt(`${new Date().getHours()}${new Date().getMinutes()}`) >= parseInt(`${hr}${mn}`)){
	// messege live now here...
	messegeDiv('<span style="color:red">●<\/span> Ahora en vivo por <a href="http://www.avivamehd.tv">AvivameHD.tv<\/a>');
	clearInterval(lni);
	lei = setInterval(liveEnd, 1000);
	}
}
function liveEnd() {
	if(parseInt(`${new Date().getHours()}${new Date().getMinutes()}`) > offAir){
	// remove messege here...
	annoucement_div.remove();
	clearInterval(lei);
	}
}
