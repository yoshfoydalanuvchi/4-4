//15 Oldingi Vazifada qolib ketgandi

// for (let i = 97; i <= 122; i++) {
//   console.log(String.fromCharCode(i));
// }

//For ga oid masalalar

//1

// let sum = 0;
// for (let i = 11; i <= 100; i += 2) {
//   sum += i;
// }
// console.log(sum);

//2
// let num = 10;
// let result = 1;
// for (let i = 1; i <= num; i++) {
//   result *= i;
// }
// console.log(result);

//4
// let sum = 1;
// for (let i = 1; i <= 20; i++) {
//   sum = i * i;
// }
// console.log(sum);

//5

// let max = 0;
// let min = 0;

// for (let i = 0; i < 5; i++) {
//   let num = +prompt("sonni kiriting");
//   if (i == 0 || num < min) {
//     min = num;
//   }
//   if (num > max) {
//     max = num;
//   }
// }
// console.log(max);
// console.log(min);

// Break/continue ga oid masalalar.

//1
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

//2
for (let i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) {
    continue;
  }
  console.log(i);
}
//3
for (let i = 1; i <= 10; i++) {
  let a = +prompt("Son kiriting:");
  if (a == 7) {
    console.log("Topildi!");
    break;
  }
}

//4
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//5
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i > 50) {
    break;
  }
}
