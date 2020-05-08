 function fibonacci(num, memo) {
  if (num===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

let sequence = fibonacci(20)

console.log(sequence.join(','))
