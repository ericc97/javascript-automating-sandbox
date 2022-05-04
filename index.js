

function fib(n){
	let arr = [0, 1];
	for(let i = 2; i< n + 1; i++){
		arr.push(arr[i - 2] + arr[i - 1])
	}
	return(arr[n])
	
}

// console.log(fib(12))



const functionFib = (num) => {
	if(num < 2 ) return num;
	
	
	return functionFib(num - 2) + functionFib(num - 1)

	
}

console.log(functionFib(5))