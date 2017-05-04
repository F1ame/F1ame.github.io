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
function div(attr) {
otp = "<div"+ attr + ">";
	return otp
}
div2 = "</div>";
pgnd = "</body></html>";
txtcrnt = ":";
capi = false;
txtarea = document.getElementById("text");
document.onkeydown = function(evt2) {
    evt2 = evt2 || window.event;
    var charCode2 = evt2.keyCode || evt2.which;
    var charStr2 = String.fromCharCode(charCode2);
    console.log(charCode2);
	if(charCode2 = 16) {
		capi = true
}
}
document.onkeyup = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    console.log(charCode+capi);
	if(charCode == 16) {
		capi = false;
	}
	if(charCode == 8) {
		if(txtcrnt.length > 1) {
		txtcrnt = txtcrnt.substring(0,txtcrnt.length-1);
		}
	}else if (capi == true) {
	txtcrnt = txtcrnt + charStr.toUpperCase();
		console.log("capital");
	}else{
	txtcrnt = txtcrnt + charStr.toLowerCase();
		console.log("lower");
	}
document.getElementById("text").innerHTML = txtcrnt;
};
