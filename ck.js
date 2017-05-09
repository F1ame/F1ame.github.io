
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
