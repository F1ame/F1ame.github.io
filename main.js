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
cmds = {
run: "got"
};
function nter() {
cmd(txtcrnt);
	txtcrnt = ":";
}
function cmd(cm) {
cm = cm.substring(1,cm.length);
	cm = cm.split(" ");
	cmdev = "cmds." + cm[0];
	console.log(cm);
	console.log(cmdev);
}
pgnd = "</body></html>";
txtcrnt = ":";
capi = false;
txtarea = document.getElementById("text");
document.onkeydown = function(evt2) {
    evt2 = evt2 || window.event;
    var charCode2 = evt2.keyCode || evt2.which;
    var charStr2 = String.fromCharCode(charCode2);
    console.log(charCode2);
	if(charCode2 == 16) {
		capi = true
}
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
	if(charCode == 8) {
		if(txtcrnt.length > 1) {
		txtcrnt = txtcrnt.substring(0,txtcrnt.length-1);
		}
	}else if (charCode != 16) {
	txtcrnt = txtcrnt + letter(charCode);
	}
document.getElementById("text").innerHTML = txtcrnt;
};
function letter(cc) {
 sk = "";
	console.log(capi)
	if(capi) {
		console.log(capi);
	switch (cc){
		case 65:
		case 66:
		case 67:
		case 68:
		case 69:
		case 70:
		case 71:
		case 72:
		case 73:
		case 74:
		case 75:
		case 76:
		case 78:
		case 79:
		case 77:
		case 80:
		case 81:
		case 82:
		case 83:
		case 84:
		case 85:
		case 86:
		case 87:
		case 88:
		case 89:
		case 90:
		sk = String.fromCharCode(cc);
		break;
		case 48:
			sk = ")";
		break;
		case 49:
			sk = "!";
		break;
		case 50:
			sk = "@";
		break;
		case 51:
			sk = "#";
		break;
		case 52:
			sk = "$";
		break;
		case 53:
			sk = "%";
		break;
		case 54:
			sk = "^";
		break;
		case 55:
			sk = "&";
		break;
		case 56:
			sk = "*";
		break;
		case 57:
			sk = "(";
		break;
		case 192:
			sk = "~";
		break;
		case 188:
			sk = "<";
		break;
		case 190:
			sk = ">";
		break;
		case 191:
			sk = "?";
		break;
		case 13:
			sk = "";
			nter();
		break;
		case 186:
			sk = ":";
		break;
		case 222:
			sk = "\"";
		break;
		case 220:
			sk = "|";
		break;
		case 221:
			sk = "}";
		break;
		case 219:
			sk = "{";
		break;
		case 189:
			sk = "_";
		break;
		case 187:
			sk = "+";
			break;
		case 32:
			sk = " ";
			break;
		default:
			sk = "";
			break;
		  }
}else{switch (cc){
		case 65:
		case 66:
		case 67:
		case 68:
		case 69:
		case 70:
		case 71:
		case 72:
		case 73:
		case 74:
		case 75:
		case 76:
		case 78:
		case 79:
		case 77:
		case 80:
		case 81:
		case 82:
		case 83:
		case 84:
		case 85:
		case 86:
		case 87:
		case 88:
		case 89:
		case 90:
		sk = String.fromCharCode(cc);
			sk = sk.toLowerCase();
		break;
		case 48:
	case 96:
			sk = "0";
		break;
		case 49:
	case 97:
		sk = "1";
		break;
		case 50:
	case 98:
		sk = "2";
		break;
		case 51:
	case 99:
		sk = "3";
		break;
		case 52:
	case 100:
		sk = "4";
		break;
		case 53:
	case 101:
		sk = "5";
		break;
		case 54:
	case 102:
		sk = "6";
		break;
		case 55:
	case 103:
		sk = "7";
		break;
		case 56:
	case 104:
		sk = "8";
		break;
		case 57:
	case 105:
		sk = "9";
		break;
		case 192:
			sk = "`";
		break;
		case 188:
			sk = ",";
		break;
		case 190:
			sk = ".";
		break;
		case 191:
			sk = "/";
		break;
		case 13:
			sk = "";
			nter();
		break;
		case 186:
			sk = ";";
		break;
		case 222:
			sk = "\'";
		break;
		case 220:
			sk = "\\";
		break;
		case 221:
			sk = "]";
		break;
		case 219:
			sk = "[";
		break;
		case 189:
			sk = "-";
		break;
		case 187:
			sk = "=";
			break;
		case 32:
			sk = " ";
			break;
		default:
			sk = "";
			break;
		  }
}return sk;}
