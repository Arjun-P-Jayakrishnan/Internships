var vehicle_space=[1,2,0];//free available space
//s -scooter,c-car,b-bus
var hrs;//hours spent in parking
const amount=[0,0];//total amount with split the base and hourly charge

function calc_amount(vehicle){
	
	
	const park_hours=document.getElementById("park_hours").value;
	







	if(vehicle=='s'){
		var temp=0;

		for(var i=0;i<3;i++){

			if(vehicle_space[i]>=1){

				vehicle_space[i]--;//book the slot
				temp++;//check if made a booking or not
				amount[0]=140;
				amount[1]=1*park_hours;
				break;

			}

		}

		if(temp==0){
			alert("No available parking slot");
		}
		else{
			alert("The total charge is :"+(amount[0]+amount[1])+" \n \t minimum :"+amount[0]+"\n rest of the amount :"+amount[1]);
		}

	}
	else if(vehicle=='c'){
		var temp=0;

		for(var i=1;i<3;i++){

			if(vehicle_space[i]>=1){

				vehicle_space[i]--;
				temp++;
				amount[0]=150;
				amount[1]=2*park_hours;
				break;

			}

		}
		if(temp==0){
			alert("No available space in parking lot");
		}
		else{
			alert("The total charge is : "+(amount[0]+amount[1])+" \n \t minimum :"+amount[0]+"\n rest of the amount :"+amount[1]);
		}

	}
	else if(vehicle=='b'){

		if(vehicle_space[2]>=1){
			vehicle_space[2]--;
			amount[0]=160;
			amount[1]=3*park_hours;
			alert("The total charge is : "+(amount[0]+amount[1])+" \n \t minimum :"+amount[0]+"\n rest of the amount :"+amount[1]);
		}
		else{
			alert("No available parking lot");
		}

	}
	else{

	alert("Invalid value");

		}

}