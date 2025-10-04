function makeid(l) {
  // write your code here

	if(l<=0) {
		return;
	}
	
	let randomStr = '';

	for(let i=0; i<l; i++) {
		let randomCapitalCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
		let randomSmallCharCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
		let randomNum = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

		let selectedChar = [String.fromCharCode(randomCapitalCharCode), String.fromCharCode(randomSmallCharCode), randomNum]
		const randomIndex = Math.floor(Math.random() * selectedChar.length);
		
		randomStr += selectedChar[randomIndex];
	}

	// let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	// for(let i=0; i<l; i++) {
	// 	randomStr += str.charAt(Math.floor(Math.random() * str.length));
	// }

	return randomStr;
}


 

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l)); 
