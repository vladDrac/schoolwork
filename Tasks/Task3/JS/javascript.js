//this is the event handler from HTML GUI
function throw_dice()
{	
	//extracts the min and max from GUI
	var minimum= Number(document.my_form.numbers1.value);
	var maximum= Number(document.my_form.numbers2.value);
	
	//creates first instance of die
	var die_one = new die(minimum, maximum); //instance created using new operator
	var first_result=die_one.calculate_number;//stores the result of calling the method
	document.my_form.box1.value=first_result; //sends the result back to GUI
	
	//creates second instance of die
	var die_two=new die(minimum, maximum);
	document.my_form.box2.value=die_two.calculate_number; //this is the equivalent of line 10 and 11 from previous die

}

//template of the die object
function die(min_value, max_value)
{	
	//this will store the result from method
	this.calculate_number = roll_die();
	
	
	//this is the method
	function roll_die()
	{	
		var random_number= Math.random()
		var range= max_value-min_value;
		random_number = random_number*range;
		random_number= Math.round(random_number);
		random_number=random_number+min_value;
		
		return random_number;
	}
}



