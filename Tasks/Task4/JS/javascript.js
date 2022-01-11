// JavaScript Document

function extract_cookies()
{
	var cookie_with_spaces = document.cookie;
	var cookie_with_no_spaces = cookie_with_spaces.replace(/\s/, "");
	
	var cookie_array = cookie_with_no_spaces.split(';');
	
	var one = cookie_array[0];
	var two = cookie_array[1];
	
	one=one.substring(11);
	two=two.substring(9);
	
	var total_login = one+two;
	
	
	var username_input = document.getElementById("user_name").value;
	var password_input = document.getElementById("password").value;
	
	var total_login_input = username_input + password_input;
	
	if (total_login == total_login_input){
		window.open("task4_page3.html", "_self");
	}
	else
	{
		window.open("task4_page2.html", "_self");
	}
	

}
function back_to_login()
{
	window.open("task4.html", "_self");
}

function disable_60s()
{
	if(document.getElementById("60s").checked == true)
	{
		document.getElementById("70s").disabled=true;
		document.getElementById("80s").disabled=true;
		document.getElementById("90s").disabled=true;
	}
	else
	{
		document.getElementById("70s").disabled=false;
		document.getElementById("80s").disabled=false;
		document.getElementById("90s").disabled=false;
	}
}

function disable_70s()
{
	if(document.getElementById("70s").checked == true)
	{
		document.getElementById("60s").disabled=true;
		document.getElementById("80s").disabled=true;
		document.getElementById("90s").disabled=true;
	}
	else
	{
		document.getElementById("60s").disabled=false;
		document.getElementById("80s").disabled=false;
		document.getElementById("90s").disabled=false;
	}
}

function disable_80s()
{
		if(document.getElementById("80s").checked == true)
	{
		document.getElementById("60s").disabled=true;
		document.getElementById("70s").disabled=true;
		document.getElementById("90s").disabled=true;
	}
	else
	{
		document.getElementById("60s").disabled=false;
		document.getElementById("70s").disabled=false;
		document.getElementById("90s").disabled=false;
	}
}

function disable_90s()
{
		if(document.getElementById("90s").checked == true)
	{
		document.getElementById("60s").disabled=true;
		document.getElementById("70s").disabled=true;
		document.getElementById("80s").disabled=true;
	}
	else
	{
		document.getElementById("60s").disabled=false;
		document.getElementById("70s").disabled=false;
		document.getElementById("80s").disabled=false;
	}
}

function options_cookies()
{
	var holden = document.my_form.car_make[0].checked;
	var toyota = document.my_form.car_make[1].checked;
	var ford = document.my_form.car_make[2].checked;
	var vw = document.my_form.car_make[3].checked;
	if (holden == true)
	{
		document.cookie="car_make=Holden";
	}
	if (toyota == true)
	{
		document.cookie="car_make=Toyota";
	}
	if (ford == true)
	{
		document.cookie="car_make=Ford";
	}
	if (vw == true)
	{
		document.cookie="car_make=VW";
	}
	
	var sixties = document.getElementById("60s").checked;
	var seventees = document.getElementById("70s").checked;
	var eighties = document.getElementById("80s").checked;
	var ninties = document.getElementById("90s").checked;
	
	if (sixties == true)
	{
		document.cookie="era=60s";
	}
	if (seventees == true)
	{
		document.cookie="era=70s";
	}
	if (eighties == true)
	{
		document.cookie="era=80s";
	}
	if (ninties == true)
	{
		document.cookie="era=90s";
	}
	
	var OS = document.getElementById("os_choice").value;
	if(OS == "Windows")
	{
		document.cookie="os_choice=Windows";
	}
	if(OS == "Linux")
	{
		document.cookie="os_choice=Linux";
	}
	if(OS == "Mac OS")
	{
		document.cookie="os_choice=Mac OS";
	}
	if(OS == "DOS")
	{
		document.cookie="os_choice=DOS";
	}
	window.open("task4_page4.html", "_self");

}

function thecookie()
{
	var cookie_with_spaces = document.cookie;
	var cookie_with_no_spaces = cookie_with_spaces.replace(/\s/, "");
	
	var cookie_array = cookie_with_no_spaces.split(';');
	
	var one = cookie_array[0];
	var two = cookie_array[1];
	var three = cookie_array[2];
	var four = cookie_array[3];
	var five = cookie_array[4];
	
	one=one.substring(11);
	two=two.substring(9);
	three=three.substring(10);
	four=four.substring(5);
	five=five.substring(11);
	
	document.getElementById("user").innerHTML = one;
	document.getElementById("car").innerHTML = three;
	document.getElementById("era").innerHTML = four;
	document.getElementById("os").innerHTML = five;
}

function back_to_login()
{
	window.open("task4.html", "_self");
}
function clear_options()
{
	var holden = document.my_form.car_make[0].checked=false;
	var toyota = document.my_form.car_make[1].checked=false;
	var ford = document.my_form.car_make[2].checked=false;
	var vw = document.my_form.car_make[3].checked=false;
	
	
	var sixties = document.getElementById("60s").checked=false;
	var sixties = document.getElementById("60s").disabled=false;
	var seventees = document.getElementById("70s").checked=false;
	var seventees = document.getElementById("70s").disabled=false;
	var eighties = document.getElementById("80s").checked=false;
	var eighties = document.getElementById("80s").disabled=false;
	var ninties = document.getElementById("90s").checked=false;
	var ninties = document.getElementById("90s").disabled=false;
	
	
	
	
}