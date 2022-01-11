function populate_list()
{
	var first = ["Macbook Air", "Macbook Pro", "iMac"];
	var second = ["Dell", "Acer", "HP"];
	var third = ["Chromebook", "Psystar", "Green Machine"];
	
	var new_element = "<select id='second_list' onChange='show_select();'>";
	
	if (document.getElementById("mac").checked == true)
	{
		for (var i = 0; i < first.length; i++)
		{
			new_element += "<option value='"+first[i]+"'>" + first[i]+"</option>";
		}
		new_element += "</select>";
		document.getElementById("newselect").innerHTML=new_element;
	}
	else if (document.getElementById("micro").checked == true)
	{
		for (var i = 0; i < second.length; i++)
		{
			new_element += "<option value='"+second[i]+"'>" + second[i]+"</option>";
		}
		new_element += "</select>";
		document.getElementById("newselect").innerHTML=new_element;
	}
		else if (document.getElementById("osource").checked == true)
	{
		for (var i = 0; i < third.length; i++)
		{
			new_element += "<option value='"+third[i]+"'>" + third[i]+"</option>";
		}
		new_element += "</select>";
		document.getElementById("newselect").innerHTML=new_element;
	}
	else
	document.getElementById("newselect").innerHTML=document.getElementById("second_list").value;
}

function show_select()
{
	document.getElementById("final_output").innerHTML=document.getElementById("second_list").value;
}