// JavaScript Document

function create_cookie()
{
	var d = new Date();
d.setTime(d.getTime()+(1*24*60*60*1000));
var expires = "expires="+d.toGMTString();
//document.cookie = cname+"="+cvalue+"; "+expires;
	
	var user_name = document.getElementById("user_name_create").value;
	var password = document.getElementById("password_create").value;
	document.cookie="first_name="+user_name+"; "+expires;
	document.cookie="password="+password+"; "+expires;
	
	window.open("task4.html", "_self");
	
}