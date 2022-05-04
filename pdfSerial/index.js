const fs = require('fs');
const pdf = require('pdf-parse');
const hummus = require('hummus');

async function main() {
  const pdfFiles = fs.readdirSync('./pdfs/input');

  for(const pdfFile of pdfFiles){
    const pathToCurrentPdf = `./pdfs/input/${pdfFile}`;

    // Grab serial number from first page
    const data = await pdf(fs.readFileSync(pathToCurrentPdf), {max: 1}) // Grab only 1st page pdf text
    const serial = data.text.trim();

    // Create a new pdf by grabbing first page of each input pdf
    const pdfWriter = hummus.createWriter(`./pdfs/output/${serial}.pdf`);
    pdfWriter.appendPDFPagesFromPDF(pathToCurrentPdf, {
       type: hummus.eRangeTypeSpecific,
       specificRanges: [[0, 0]], // grab page 1 to 1
      });
      pdfWriter.end();

  }
}

main();