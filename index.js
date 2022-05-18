

function fib(n){
	let arr = [0, 1];
	for(let i = 2; i< n + 1; i++){
		arr.push(arr[i - 2] + arr[i - 1])
	}
	return(arr[n])
	
}

// console.log(fib(12))



const fibFunc = (int) => {
	if (int < 3) return 1;

	return fibFunc(int - 1) + fibFunc(int - 2);
}

console.log(fibFunc(12))