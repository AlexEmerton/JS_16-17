var customerNumbers = 12;
var winningNumbers = [12, 17, 24, 37, 38, 43];

// .join() function prints the array placing user specified delimiters between items

alert("This Week's Winning Numbers are: \n\n" + 
		winningNumbers.join(', ') + 
		"\n\nThe Customer's Number is: \n\n" + customerNumbers);