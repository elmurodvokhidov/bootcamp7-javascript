// let a = 1;
// let b = 100;

// for(a; a <= b; a++){
//     console.log(a);
// }

// for1
// let k = 10, n = 5;
// for(let i = 1; i <= n; i++){
//     console.log(k);
// }
// let n = 5, k = 2, sum = 0;

// for (let i = 1; i <= n; i++) {
//     let power = 1;
//     console.log(i);
//     for (let j = 1; j <= k; j++) {
//         power *= i;
//         console.log(j);
//     }
//     sum += power;
// }
// // console.log(sum);

let n = 20, a = 0;
console.log(`1 kg konfetning narxi ${n} so'm`);
for (a; a <= 1; a += 0.1) {
    console.log(`${a.toFixed(1)} kg konfetning narxi ${a.toFixed(1) * n} so'm`);
}