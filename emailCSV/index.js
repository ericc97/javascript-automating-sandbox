const fs = require('fs');
const csvGenerator = require('./csv_generator');

const sendMail = require('./send_email')

const usersCSV = fs.readFileSync('./csvFiles/USERS.csv');

// generate output CSV
csvGenerator.generateDomainCountCSV(usersCSV);
// Grab output csv that was just generated from above
const domainCountCSV = fs.readFileSync('./csvFiles/DOMAIN_COUNT.csv')

// Send email of output CSV
sendMail('fakeemail@gmail.com', {
   filename: 'fileName', 
   content: domainCountCSV
});
