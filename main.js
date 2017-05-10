rstxt = false;
	var barIsDeclared = true;
function main(ck) {
	vp = window.open("https://f1ame.github.io","_blank")
	console.log(vp)
}
Shoutbx = "<iframe id=\"sbx\" WIDTH=\"200\" HEIGHT=\"400\" title=\"Shoutbox\" src=\"https://shoutbox.widget.me/start.html?uid=591uatyg\" frameborder=\"0\" scrolling=\"auto\"></iframe>";
webAppUrl = "https://script.google.com/macros/s/AKfycbzIkiKjIHtWvw5WeNmNMTIE98i3OUvWYaKjAmrFm9YYr6SKsxUJ/exec"
charCodelst = 0;
chck = [];
alwtp = true;
var cmdswnd = {
	run: "<html><body><p>Hello World!</p></body></html>",
	chat: "<html><head><style>*{background: black; color: white;}</style></head><body>" + Shoutbx + "</body></html>",
	
}
function doc(tx) {
 
try{ if(vp != 7){barIsDeclared = true;}; }
catch(e) {
    if(e.name == "ReferenceError") {
        barIsDeclared = false;
    }
}
	if(barIsDeclared == true){
		vp.document.open("text/html", "replace");
		vp.document.write(tx);
		vp.document.close();
		rtn = "Successfully"
	}else{
		rtn="<br>> ERROR<br>> Please Click the Enter Site Button"
	}
	return rtn
}

cmds = {
	run: function() {
	return "ran hw " + doc(cmdswnd.run)
},
	chat: function() {
	return "opened chat" + doc(cmdswnd.chat)
},
	YT: function() {
if(defnr != "h"){
	console.log(defnr)
	tkn = defnr.slice(defnr.indexOf("v=")+2,ndlc(defnr));
	console.log(tkn)
	ul = "https://www.youtube-nocookie.com/embed/" + tkn;
	ytpg = "<html><head><style>*{background: black;} iframe{ height: 100vh; width: 100vw;}</style></head><body><iframe src=\"" + ul + "\"></iframe></body></html>"
	rtn = "Embeded video " + doc(ytpg)
}else{
	rtn = "please insert the v= to your video after the YT command";
}
return rtn
},
help: function() {
	return "run --- run program<br>> mute --- mutes that audio in the background<br>> chat --- open chat<br>> YT (v=_________) --- generate a link to the designated video<br>> help --- List Commands<br>> clear --- Clear log"
},
clear: function() {
prevtp = ""
return "cleared"	
},
	mute: function() {
document.getElementById("aud").removeAttribute("loop");
	return "muted"
},
};

function ndlc(sttr) {
console.log(sttr);
nm = sttr.indexOf("&")
	if(nm == -1){
		nm = sttr.length
	}
	return nm
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
rstxt = false;
function nter() {
cmd(txtcrnt);
	txtcrnt = ":";rstxt = true;
}
function cmd(cm) {
	defnr = "h"
	prevtp = document.getElementById("outpt").innerHTML;
cm = cm.substring(1,cm.length);
	cm = cm.split(" ");
	cmdev = "cmds.";
	cmdev = cmdev + cm[0];
	if(cm.length == 2){
		defnr = cm[1]
	}
	console.log(cmdev);
	cmdev = eval(cmdev)
	console.log(cm);
	console.log(cmdev);
	cmdev = cmdev()
	console.log(cmdev);
	//prevoutp = document.getElementById("outp
	document.getElementById("outpt").innerHTML = prevtp + "> " + cmdev + "<br>";
}
capi = false;
txtcrnt = ":";
function indx(item) {
return item == charCodelst
}
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
if(rstxt){
txtcrnt = ":";
document.getElementById("text").innerHTML = txtcrnt;
	rstxt = false;
}
};
