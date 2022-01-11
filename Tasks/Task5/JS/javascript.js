function message()
{
	var message = "";
	var inputNumber=document.getElementById("first_box").value;
	for (var i=1; i <=inputNumber; i++)
	{
		for (var count=0; count<i; count++)
		{
			if(i<=9)
				message=message+"0"+i;
			else
				message=message+i;
		}
		message=message+"<br/>";
	}
	document.write(message);
	return true;
}

function HP()
{
	
	var input_multiple = Number(document.getElementById("multiple").value);
	var input_upper_limit = Number(document.getElementById("upper_limit").value);
	var input_number_coloumns = Number(document.getElementById("number_of_coloumn").value);
	var counter = 0;
	
	var message="Oi, the multiples of "+input_multiple+" from 0 to "+input_upper_limit+" are:<br /><table border='1'><tr>";
	
	for(var i=input_multiple; i<=input_upper_limit; i=i+input_multiple)
	{
		message=message+"<td>"+i+"</td>";
		counter++;
		
		if((counter%input_number_coloumns)==0)
			message=message+"</tr><tr>";
			
	}
	document.write(message+"</tr></table>");
	return true;
}