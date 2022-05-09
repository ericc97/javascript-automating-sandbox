// goal = modify excel file to adding bonus points to test2 (T2) scores
// Methods = work with the worksheet object the xlsx package gives us, instead of turning it into an Array of Objects

const XLSX = require('xlsx');

const workbook = XLSX.readFile('scores.xlsx');
const worksheet = workbook.Sheets['Sheet1'];
const range = XLSX.utils.decode_range(worksheet["!ref"]); // grabs number of rows and column //!ref == default value

// loop over every roe/student in worksheet
for(let rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
  const highSchool = worksheet[XLSX.utils.encode_cell({ r: rowNum, c: 1 })].v;

  // Give extra 30 points to Test 2 for students of Lead Paint HS
  if (highSchool === 'Lead Paint HS'){
    worksheet[XLSX.utils.encode_cell({ r: rowNum, c:3})].v += 30 // 30 point curve

    const newWb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWb, worksheet, 'Sheet1') //
    XLSX.writeFile(newWb, 'ScoresWithCurve.xlsx')
  }
}
