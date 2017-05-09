Shoutbx = "<iframe id=\"sbx\" WIDTH=\"200\" HEIGHT=\"400\" title=\"Shoutbox\" src=\"https://shoutbox.widget.me/start.html?uid=591uatyg\" frameborder=\"0\" scrolling=\"auto\"></iframe>";
pgtp = "<!doctype html>\
<html>\
<head>\
  <link rel=\"stylesheet\"href=\"main.css\">\
	<script src=\"main.js\"></script>\
	<audio loop autoplay><source src=\"Typing (Sound Effect).mp3\" type=\"audio/mpeg\"></audio>\
<div class=\"main backdrp\"><br><span style=\"font-size: 200%; background: black; color: lightgreen;\"> 	>  <span id=\"text\" style=\"font-size: 200%; background: black; color: lightgreen;\">:</span><span class=\"flsh\">|</span></span></div>\
<title>";
pgtp2 = "</title></head><body>";

pgnd = "</body></html>";

webAppUrl = "https://script.google.com/macros/s/AKfycbzIkiKjIHtWvw5WeNmNMTIE98i3OUvWYaKjAmrFm9YYr6SKsxUJ/exec"
charCodelst = 0;
div2 = "</div>";
chck = [];
alwtp = true;
cmds = {
run: "run",
chat: "chat",
YT: "YT"
};
function ndlc(sttr) {
console.log(sttr);
nm = sttr.indexOf("&")
	if(nm == -1){
		nm = sttr.length
	}
	return nm
}
function YT() {
if(defnr != "h"){
	console.log(defnr)
	tkn = defnr.slice(defnr.indexOf("v=")+2,ndlc(defnr));
	console.log(tkn)
	ul = "http://www.youtube-nocookie.com/embed/" + tkn;
	vp.document.open("text/html", "replace");
	vp.document.write("<html><body><a href=\"" + ul + "\">view your video</a></body></html>")
	vp.document.close();
	rtn = "created link"
}else{
	rtn = "please insert the link to your video after the YT command";
}
return rtn
}
function chat() {
	vp.document.open("text/html", "replace");
    vp.document.write("<html><body>" + Shoutbx + "</body></html>");
    vp.document.close();
	return "opened chat"
}
capi = false;
txtarea = document.getElementById("text");
function indx(item) {
return item == charCodelst
}
function div(attr) {
otp = "<div"+ attr + ">";
	return otp
}
function main(ck) {
vp = window.open()	
}
function run() {
	    vp.document.open("text/html", "replace");
    vp.document.write("<html><body><p>Hello World!</p></body></html>");
    vp.document.close();
	return "ran hw"
}
function nter() {
cmd(txtcrnt);
	txtcrnt = ":";
	document.getElementById("text").innerHTML = txtcrnt;
}
function cmd(cm) {
	defnr = "h"
cm = cm.substring(1,cm.length);
	cm = cm.split(" ");
	cmdev = "cmds.";
	cmdev = cmdev + cm[0];
	if(cm.length == 2){
		defnr = cm[1]
	}
	cmdev = eval(cmdev)
	cmdev = eval(cmdev + "()")
	console.log(cm);
	console.log(cmdev);
	//prevoutp = document.getElementById("outp
	prevtp = document.getElementById("outpt").innerHTML;
	document.getElementById("outpt").innerHTML = prevtp + ">" + cmdev + "<br>";
}txtcrnt = ":";

document.onkeydown = function(evt2) {
    evt2 = evt2 || window.event;
    var charCode2 = evt2.keyCode || evt2.which;
    var charStr2 = String.fromCharCode(charCode2);
    console.log(charCode2);
	if(charCode2 == 16) {
		capi = true
}
	if(alwtp == true) {
	if(charCode2 == 8) {
		if(txtcrnt.length > 1) {
		txtcrnt = txtcrnt.substring(0,txtcrnt.length-1);
		}
	}else if (charCode2 != 16) {
	txtcrnt = txtcrnt + letter(charCode2);
		alwtp = false;
	}
		if(charCode2 != 16 && charCode2 != 8) {
		chck.push(charCode2);
	}
	}
document.getElementById("text").innerHTML = txtcrnt;
}
document.onkeyup = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    console.log(charCode);
	console.log(capi);
	if(charCode == 16) {
		capi = false;
	}
	if(charCode != 16) {
		if(charCode != 8) {
		charCodelst = charCode
		};
		if(chck.findIndex(indx) != -1) {
		chck.splice(chck.findIndex(indx),1);
				   }
		console.log(chck);
		console.log(chck.length);
				   if(chck.length == 0) {
			alwtp = true;
				   }else{alwtp = 0}
	}
	
};
