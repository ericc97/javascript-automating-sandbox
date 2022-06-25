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

/* 
Other Scripting Ideas
  - Have a script check for available apartments on Craigslist every X minutes, if a new listing goes up AND it's price is below X.amount of dollars a month, have your script send you a text message with the listing link

  - Have a script check your company's website on availability of car chargers every X amount of time. When a charger becomes available, have a script send you a text
*/