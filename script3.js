/* Задача с кратным числом */

let v = prompt('Right the aliquot number', 0);
let m = prompt('Right the max number', 0);
let n = prompt('Right the max numbers', 0);



nextPrime:
for (let i = 0; i <= m; i++) {
  if (i % v) continue; 
  for (let j = 0; j <= n; j++) {
    if (j > n) break nextPrime;
  }

  console.log( i ); 
}
