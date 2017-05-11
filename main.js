version = "V.0.1";
rstxt = false;
linkArray = ["http://slimabob.github.io/Megum.in/","http://downloadmoreram.com/","http://eelslap.com/","http://www.staggeringbeauty.com/","http://www.movenowthinklater.com/","http://ducksarethebest.com/","http://www.rrrgggbbb.com/","http://www.partridgegetslucky.com/","http://hooooooooo.com/","http://www.trypap.com/","http://burymewithmymoney.com/","http://endless.horse/","http://www.fallingfalling.com/","http://thatsthefinger.com/"]; // your links
var Shoutbx = "<iframe id=\"sbx\" WIDTH=\"200\" HEIGHT=\"400\" title=\"Shoutbox\" src=\"https://shoutbox.widget.me/start.html?uid=591uatyg\" frameborder=\"0\" scrolling=\"auto\"></iframe>";
var webAppUrl = "https://script.google.com/macros/s/AKfycbzIkiKjIHtWvw5WeNmNMTIE98i3OUvWYaKjAmrFm9YYr6SKsxUJ/exec"
charCodelst = 0;
chck = [];
alwtp = true;
capi = false;
txtarea = document.getElementById("text");
txtcrnt = ":";
var cmds = {
    spam: function() {
        for(i in linkArray) {
            eval("window.open(\'" + linkArray[i] + "\',\'_blank\')")
        }
        return "kk"
    },
    open: function() {
        vp = eval("window.open('https://f1ame.github.io','_blank')")
        return "opened window"
    },
    info: function() {
        return "Contact Me at keeperflame45@gmail.com"
    },
    eval: function() {
        var msg = ""
        eval(prompt("Please enter code", ""));
        return msg
    },
    run: function() {
        return "ran hw " + doc(cmdswnd.run)
    },
    chat: function() {
        return "opened chat " + doc(cmdswnd.chat)
    },
    YT: function() {
        var defnryt = prompt("Please enter the youtube videos unshortened url", "");
        if (defnryt != "") {
            tkn = defnryt.slice(defnryt.indexOf("v=") + 2, ndlc(defnryt));
            ul = "https://www.youtube-nocookie.com/embed/" + tkn;
            ytpg = "<html><head><style>*{background: black;} iframe{ height: 100vh; width: 100vw;}</style></head><body><iframe src=\"" + ul + "\"></iframe></body></html>"
            rtn = "Embeded video " + doc(ytpg)
        } else {
            rtn = "please insert the v= to your video after the YT command";
        }
        return rtn
    },
    help: function() {
        return "open --- opens output window<br>&#10874; info --- contact information <br>&#10874; eval --- evaluate text as code<br>&#10874; run --- run program<br>&#10874; mute --- mutes that audio in the background<br>&#10874; chat --- open chat<br>&#10874; YT --- Embed the designated video<br>&#10874; help --- List Commands<br>&#10874; clear --- Clear log"
    },
    clear: function() {
        prevtp = ""
        return "cleared "
    },
    mute: function() {
        document.getElementById("aud").removeAttribute("loop");
        return "muted "
    },
};
var barIsDeclared = true;
var cmdswnd = {
    run: "<html><body><textarea id=\"tst\"></textarea><button onclick=\"dvl()\">Run Code</button><script>function dvl() {eval(document.getElementById(\"tst\").value)}</script></body></html>",
    chat: "<html><head><style>*{background: black; color: white;}</style></head><body>" + Shoutbx + "</body></html>",
}
//open new page
function main(ck) {
    vp = window.open("https://f1ame.github.io", "_blank")
    console.log(vp)
}
//write to document stream
function doc(tx) {
    try {
        if (vp != 7) {
            barIsDeclared = true;
        };
    } catch (e) {
        if (e.name == "ReferenceError") {
            barIsDeclared = false;
        }
    }
    if (barIsDeclared == true) {
        vp.document.open("text/html", "replace");
        vp.document.write(tx);
        vp.document.close();
        rtn = "Successfully"
    } else {
        rtn = "<br>&#10874; Error no output window<br>&#10874; Please enter the open command"
    }
    return rtn
}
//locate end of v=
function ndlc(sttr) {
    nm = sttr.indexOf("&")
    if (nm == -1) {
        nm = sttr.length
    }
    return nm
}

//on enter do
function nter() {
    cmd(txtcrnt);
    txtcrnt = ":";
    rstxt = true;
}
//run command
function cmd(cm) {
    defnr = "h"
    prevtp = document.getElementById("outpt").innerHTML;
    cm = cm.substring(1, cm.length);
    cm = cm.split(" ");
    cmdev = "cmds.";
    cmdev = cmdev + cm[0];
    lstcmd = cm[0];
    if (cm.length == 2) {
        defnr = cm[1]
    }
    cmdev = eval(cmdev)
    cmdev = cmdev()
    //prevoutp = document.getElementById("outp
    document.getElementById("outpt").innerHTML = prevtp + "&#8919; " + lstcmd + "<br>&#10874; " + cmdev + "<br>";
}
//get index number
function indx(item) {
    return item == charCodelst
}

//key events
document.onkeydown = function(evt2) {
    evt2 = evt2 || window.event;
    var charCode2 = evt2.keyCode || evt2.which;
    var charStr2 = String.fromCharCode(charCode2);
    if (charCode2 == 16) {
        capi = true
    }
    if (alwtp == true) {
        if (charCode2 == 8) {
            if (txtcrnt.length > 1) {
                txtcrnt = txtcrnt.substring(0, txtcrnt.length - 1);
            }
        } else if (charCode2 != 16) {
            txtcrnt = txtcrnt + letter(charCode2);
            alwtp = false;
        }
        if (charCode2 != 16 && charCode2 != 8) {
            chck.push(charCode2);
        }
    }
    document.getElementById("text").innerHTML = txtcrnt;
    if(charCode2 == 17){
        alwtp = true;
        chck= [];
    }
}
document.onkeyup = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    if (charCode == 16) {
        capi = false;
    }
    if (charCode != 16) {
        if (charCode != 8) {
            charCodelst = charCode
        };
        if (chck.findIndex(indx) != -1) {
            chck.splice(chck.findIndex(indx), 1);
        }
        if (chck.length == 0) {
            alwtp = true;
        } else {
            alwtp = 0
        }
    }
    if (rstxt) {
        txtcrnt = ":";
        document.getElementById("text").innerHTML = txtcrnt;
        rstxt = false;
    }
};
