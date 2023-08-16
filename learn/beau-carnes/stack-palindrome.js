/*
** Stacks.
** Variables:
**	letters - stack,
**	word	- string,
**	rword	- reverse string.
*/

var letters = [], word = 'racecar', rword = '';

// Put letters of string (word) into stack (letters).
for (var i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

// Remove/pop-off the stack in reverse order.
for (var i = 0; i < word.length; i++) {
	rword += letters.pop();
}

if (rword === word) {
	console.log(word + ' is a palindrome.');
}
else {
	console.log(word + ' is not a palindrome');
}
