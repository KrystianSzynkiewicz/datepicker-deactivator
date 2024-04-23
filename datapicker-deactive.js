/* Add your JavaScript code here.

If you are using the jQuery library, then don't forget to wrap your code inside jQuery.ready() as follows:

jQuery(document).ready(function( $ ){
    // Your code in here
});

--

If you want to link a JavaScript file that resides on another server (similar to
<script src="https://example.com/your-js-file.js"></script>), then please use
the "Add HTML Code" page, as this is a HTML code that links a JavaScript file.

End of comment */ 

const dataButton = document.querySelector(".react-datepicker__input-container");

dataButton.addEventListener("click", displayButton);

function displayButton() {
	setInterval(()=> {
// 		const datepicker = document.querySelector(".react-datepicker");
// 		console.log(datepicker);
// 		const monthPlace = document.querySelector(".react-datepicker__month");
// 		console.log(monthPlace);
// 		monthPlace.ariaLabel = "Close dialog";
// 		console.log(monthPlace.ariaLabel);
// 		let y = monthPlace.ariaLabel;
// 		console.log(y);
// 		let x = y.split(' ');
// 		console.log(x);
// 		console.log(x[2]);
		
// 		if (x[2] == "2024-04") {
// 				console.log("KWIECIEŃ")
// 			}	else {
// 				console.log("INNY")
// 			}
		
		const dayElements = document.querySelectorAll(".react-datepicker__day"); //dayElements in NodeList
// 		console.log(dayElements);
		let dayElementsArray = Array.from(dayElements); // dayElements in Array
// 		console.log(dayElementsArray);
		dayElementsArray.forEach((e)=>{ 
// 			console.log(e);
// 			console.log(e.ariaLabel);
			let ariaLabelElement = e.ariaLabel;
			let labelOfArray = ariaLabelElement.split(' ');
// 			console.log(labelOfArray);
// 			console.log(labelOfArray[labelOfArray.length-1]); //year
// 			console.log(labelOfArray[labelOfArray.length-2]); //day
// 			console.log(labelOfArray[labelOfArray.length-3]); //month
			if (labelOfArray[labelOfArray.length-1] == "2024") {
				
// 				APRIL
				if (labelOfArray[labelOfArray.length-3] == "April") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA!")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 
				
// 				MAY
				else if (labelOfArray[labelOfArray.length-3] == "May") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 
				
// 				JUNE
				else if (labelOfArray[labelOfArray.length-3] == "June") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 
							
// 				JULY
				else if (labelOfArray[labelOfArray.length-3] == "July") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 
			
// 				August
				else if (labelOfArray[labelOfArray.length-3] == "August") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 
			
// 				September
				else if (labelOfArray[labelOfArray.length-3] == "September") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 

// 				October
				else if (labelOfArray[labelOfArray.length-3] == "October") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 
			
// 				November
				else if (labelOfArray[labelOfArray.length-3] == "November") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 
			
// 				December
				else if (labelOfArray[labelOfArray.length-3] == "December") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					} 

			
				
				//2025	
			} else if (labelOfArray[labelOfArray.length-1] == "2025") {
				
				//January
				if (labelOfArray[labelOfArray.length-3] == "January") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					}
// 				February
				else if (labelOfArray[labelOfArray.length-3] == "February") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					}

// 				March
				else if (labelOfArray[labelOfArray.length-3] == "March") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					}

// 				April
				else if (labelOfArray[labelOfArray.length-3] == "April") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					}

// 				MAY
				else if (labelOfArray[labelOfArray.length-3] == "May") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					}
				
// 				June
				else if (labelOfArray[labelOfArray.length-3] == "June") {
						if (labelOfArray[labelOfArray.length-2] == "15th,"
						   	||
							labelOfArray[labelOfArray.length-2] == "16th,"
							||
							labelOfArray[labelOfArray.length-2] == "17th,"
							||
							labelOfArray[labelOfArray.length-2] == "18th,"
						   ) {
								e.style.pointerEvents = "none";
// 								console.log("DZIAŁA")
							} else {
// 								console.log("INNY NIŻ 4th")
							}	
					}
				
				
				
// 				--------------
// 				END OF PROGRAM
// 				--------------
			}
		});
	},500)

}


