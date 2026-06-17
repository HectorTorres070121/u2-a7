// 1. FIBONACCI
function generarFibonacci(n = 10) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }
  return fibo;
}

console.log("FIBONACCI");
console.log("n=1  →", generarFibonacci(1));
console.log("n=2  →", generarFibonacci(2));
console.log("n=10 →", generarFibonacci(10));
console.log("n=10 →", generarFibonacci());

console.log("\n------------------------------------------------------")

function fizzBuzz(numero){
for (let i = 1; i <= numero; i++){
  
if  (i % 15===0) console.log("fizzbuzz");
else if(i % 5===0) console.log("buzz");
else if (i % 3 === 0) console.log("fizz");
else console.log(i);
}
}
fizzBuzz(15);