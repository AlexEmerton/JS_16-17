// double for loop to check every element of array 1 against every element of array 2

function checkNumbers(array_1, array_2) {
	var match = 0;
	// .length function returs the number of elements in the array
	for(i = 0; i < array_1.length; i++){
		for(j = 0; j < array_2.length; j++){
			if(array_1[i] === array_2[j]){
			match += 1;
			}
		}
	}
	return match;
}

function getCustomerNumber() {
	var customerNumbers = [12, 17, 37, 40];
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
	
	alert("This Week's Winning Numbers are: \n\n" + getWinningNumbers().join(', ') + "\n" 
	+ "\nThe Customer's Number is: \n\n" + getCustomerNumber().join(', ') +
	"\n\nNumbers Matched\n\n" + result);
}

function init(){
	// calling the displayResult() function from init() to start the process
	displayResult();
}
init();