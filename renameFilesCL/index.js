const fs = require('fs');

// grab all files in current directory
const fileNames = fs.readdirSync('./')

const digitsRegex = /\d{1,}/;
const lettersRegex = /[a-zA-z]{1,}/;
const fileTypeRegex = /[\u002E](.{1,})/;
const commandLineArguments = process.argv[2];

for(const fileName of fileNames){
  const name = fileName.match(lettersRegex) && fileName.match(lettersRegex)[0]; // find letters within file name 
  const studentId = fileName.match(digitsRegex) && fileName.match(digitsRegex)[0];
  const fileType = fileName.match(fileTypeRegex)[0]

  if (name && studentId) {
    let newFileName;

    if (commandLineArguments === 'nameFirst'){
      newFileName = `${name}${studentId}${fileType}`
    }else if (commandLineArguments === 'idFirst'){
      newFileName = `${studentId}${name}${fileType}`
    }else {
      throw "Please enter a command line argument of nameFirst or idFirst"
    }

    fs.renameSync(fileName, newFileName);
  }
}
