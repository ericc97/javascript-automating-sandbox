const file = './transactions.json'
const fs = require('fs');

const fileRead = (x) => {
	const data = fs.readFileSync(file, 'utf8')
	console.log(JSON.parse(data))
}

fileRead(file)