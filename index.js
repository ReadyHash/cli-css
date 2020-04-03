console.log("Node is running!");

// print all things within node process
console.log(process.argv);

let rgbHead = process.argv[2];
let colorR = parseInt(process.argv[3]);
let colorG = parseInt(process.argv[4]);
let colorB = parseInt(process.argv[5]);

// console.log("assigning the index 2 to hex");

// console.log(rgbHead);
// console.log(colorR);
// console.log(colorG);
// console.log(colorB);
// console.log(        );
// console.log();

let redHex = colorR.toString(16);
console.log(redHex);

let rgbNumber = rgbToHex(colorR, colorG, colorB);
console.log(rgbNumber);



// creates a function called componentToHex with parameter C
function componentToHex(c) {
  // take value from C through radix parameter of 16 into a hexadecimal value
  // assign hexadecimal value to variable hex
  var hex = c.toString(16);
  // ? => then
  // : => else
  // adds 0 if hex is a single digit, return hex if normal
  return hex.length == 1 ? "0" + hex : hex;
}

// creates a function called rgbToHex with 3 parameters for each color
function rgbToHex(r, g, b) {
  // adds hex symbol infront of the 3 colors
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  console.log(r , g , b);
}