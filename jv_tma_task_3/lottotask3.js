var customerNumbers = 13;
var winningNumbers = [12, 17, 24, 37, 38, 43];
var match = false;

if(winningNumbers[0] == customerNumbers || 
	winningNumbers[1] == customerNumbers ||
	winningNumbers[2] == customerNumbers ||
	winningNumbers[3] == customerNumbers ||
	winningNumbers[4] == customerNumbers ||
	winningNumbers[5] == customerNumbers)
	{
		match = true;
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
