// JavaScript Document

function obj_1_1()
{
	var user_string = document.getElementById("user_string").value;
	alert("There are "+(user_string.length)+" characters in your string");
}

function obj_1_2()
{
	var user_string = document.getElementById("user_string").value;
	alert(user_string.toUpperCase());
}

function obj_1_3()
{
	var user_string = document.getElementById("user_string").value;
	alert(user_string.toLowerCase());
}

function obj_1_4()
{
	var user_string = document.getElementById("user_string").value;
	var user_number = document.getElementById("input_number").value - (1);
	alert("The character at the number you defined "+(user_string.charAt(user_number)));
}

function obj_2_1() 
{
	var user_number = document.getElementById("input_number").value;
	var output_number = Math.sqrt(user_number);
	alert("The square root of your number is "+output_number);
}

function obj_2_2()
{
	var user_number = document.getElementById("input_number").value;
	var output_number = Math.round(user_number);
	alert("Your number rounded to the nearest 10th is: "+output_number);
}

function obj_2_3()
{
	var user_random = Math.random();
	alert("The random number generated is: "+user_random);
}

function obj_2_4()
{
	var user_number = document.getElementById("input_number").value;
	var output_number = Math.cos(user_number);
	alert("The cosine of your number is: "+output_number);
}

function obj_3_1()
{
	var date = new Date();
	var time = date.toString();
	
	alert("The time accoring to this computer is "+(time.substring(16,23)));
}

function obj_3_2()
{
	var date = new Date();
	var day = date.toString();
	
	alert("The day of the week is "+(day.substring(0,3)));
}

function obj_3_3()
{
	var date = new Date();
	var date_format = date.toString();
	
	alert("Todays date, according to this computer is "+(date_format.substring(4,15)));
}

function obj_3_4()
{
	var date = new Date();
	var month = date.toString();
	
	alert("The month accoring to this computer is "+(month.substring(4,8)));
}