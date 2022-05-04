const fs = require("fs");

let fileString = fs.readFileSync('input.txt').toString();

// fill out the intials
fileString = fileString.replace(/K:/g, 'Kevin: ')
fileString = fileString.replace(/E:/g, 'Eric: ')

// add line number
const characterArr = fileString.split("");
let lineNum = 1;

for(let i = 0; i < characterArr.length; i++){
  const preChar = characterArr[i - 1];

  if(preChar === "\n" || !preChar){
    characterArr[i] = String(lineNum) + ". " + characterArr[i];
    lineNum++;
  }
}

fileString = characterArr.join("")
fs.writeFileSync('output.txt', fileString);