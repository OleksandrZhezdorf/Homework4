/* Задача с кратным числом */

let v = prompt('Right the aliquot number', 0);
let m = prompt('Right the max number', 0);
let n = prompt('Right the max number of numbers', 0);


for (let i = 0; i <= m; i++) {
        if (i % v) continue;
        if (i / v > n - 1) break;

        console.log(i);
}