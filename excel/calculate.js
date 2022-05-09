const XLSX = require('xlsx');

const workbook = XLSX.readFile('scores.xlsx');
const worksheet = workbook.Sheets['Sheet1'];

const arrStudents = XLSX.utils.sheet_to_json(worksheet);
const highSchoolData = {}; // {highschool: {numStudents: 0, cumulativeScore: 0 }}

//Fill out  highschoolData
for(const student of arrStudents){
  const highschool = student['High School']; // use square braces versus .dot notation due to spaces in hs name
  const studentAverage = student['Average'];

  if(highschool in highSchoolData === false){ //If the highschool isn't in data.. set it
    highSchoolData[highschool] = { numStudents: 0, cumulativeScore: 0 };
  }

  highSchoolData[highschool].numStudents += 1
  highSchoolData[highschool].cumulativeScore += studentAverage;



}

// log out each average score for each highschool using highschoolData
for(const highschool of Object.keys(highSchoolData)){//Object.keys method returns an array of given object
  const highSchoolAverage = 
    highSchoolData[highschool].cumulativeScore / 
    highSchoolData[highschool].numStudents;
  console.log(`The average score for ${highschool} is ${highSchoolAverage}`);
} 