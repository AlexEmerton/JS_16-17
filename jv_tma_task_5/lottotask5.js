// .length function return the number of elements in the array

function checkNumbers(array, x) {
	var match = false;
	for(i = 0; i < array.length && match != true; i++){
		if(array[i] === x){
			match = true;
		}
	}
	return match;
}

function getCustomerNumber() {
	var customerNumbers = 43;
	return customerNumbers;
}

function getWinningNumbers(){
	var winningNumbers = [12, 17, 24, 37, 38, 43];
	return winningNumbers;
}

// .join() function prints the array placing user specified delimiters between items

function displayResult() {
	// transferring the value of match to variable result
	var result = checkNumbers(getWinningNumbers(), getCustomerNumber());
	if(result){
		alert("This Week's Winning Numbers are: \n\n" + getWinningNumbers().join(', ') + "\n" 
		+ "\nThe Customer's Number is: \n\n" + getCustomerNumber() +
		"\n\nWe have a match and a winner!");
	} else {
		alert("This Week's Winning Numbers are: \n\n" + getWinningNumbers().join(', ') + "\n" 
		+ "\nThe Customer's Number is: \n\n" + getCustomerNumber() + 
		"\n\nSorry you are not a winner this week.");
	};
}

function init(){
	// calling the displayResult() function from init() to start the process
	displayResult();
}
init();