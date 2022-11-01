
// fibonaci number

var input = 8;
var sum = 0;
var n1=0;
var n2=1;
console.log(n1,n2);
for(let i=0; i<=input; i++){
  sum = (n1+n2)
  n1 = n2
  n2= sum
  console.log(sum);
}
