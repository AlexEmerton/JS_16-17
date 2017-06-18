var customerNumbers = 12;
var winningNumbers = [12, 17, 24, 37, 38, 43];
var match = false;

// .length function return the number of elements in the array

for(i = 0; i < winningNumbers.length && match === false; i++){
	if(winningNumbers[i] == customerNumbers){
		match = true;
	}
}
	
// .join() function prints the array placing user specified delimiters between items
// if(match) is the same as calling it as match === true

if(match){
		alert("This Week's Winning Numbers are: \n\n" + winningNumbers.join(', ') + "\n" 
		+ "\nThe Customer's Number is: \n\n" + customerNumbers +
		"\n\nWe have a match and a winner!");
	} else {
		alert("This Week's Winning Numbers are: \n\n" + winningNumbers.join(', ') + "\n" 
		+ "\nThe Customer's Number is: \n\n" + customerNumbers + 
		"\n\nSorry you are not a winner this week.");
	};
