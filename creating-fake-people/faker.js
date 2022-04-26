const faker = require('faker');

const examplePeople = []; // set empty array to hold new people 

for(let i = 0; i < 3; i++){
	examplePeople.push({
		name: faker.name.findName(),
		phoneNum: faker.phone.phoneNumber(),
		email: faker.internet.email()
	})
}

console.log(examplePeople)