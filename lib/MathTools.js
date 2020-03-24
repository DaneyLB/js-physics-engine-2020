/*
function returning a random number between a min and a maximum value
*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomColorGet() {
	let HEX = "0123456789ABCDEF";
	let Stringetje = "#";

	for (var i = 0; i < 6; i++) {
		Stringetje += HEX[Math.floor(Math.random() *16)]

	}
	return Stringetje;
}