const thePara = document.getElementById("the-para");
const theDiv = document.getElementById("the-div");
const colours = ["red", "white", "yellow","aqua","green","gold","silver","maroon","pink"]
let cIndex = 0

// This function chooses the next colour from the array "colours"
function nextColour() {
	cIndex = cIndex === colours.length -1 ? 0 : cIndex+1
	return colours[cIndex]
}

/* Write a function "handleParaClick()" that handles a click event on the paragraph element and calls the nextColour() function to choose colors from the array. */
function handleParaClick(event) {
	//YOUR CODE HERE
	// event.stopPropagation()
	thePara.style.backgroundColor = nextColour();

}

/* Write a function "handleDivClick()" that handles a click event on the div element and calls the nextColour() function to choose colors from the array. */
function handleDivClick() {
	//YOUR CODE HERE
	theDiv.style.backgroundColor = nextColour(); 
}

/* Add event listeners on paragraph element and div element 
YOUR CODE HERE
*/

// one option capture:true. What is this? Event bubbling in the reverse order
thePara.addEventListener("click", handleParaClick);
theDiv.addEventListener("click", handleDivClick, {capture: true});




