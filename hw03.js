
/* task 1

let user = {};
user.name = prompt("What is your name?");

user.age = prompt("How old are you?");

user.gender = prompt("Are you a man or a woman?");

console.log(user); */




/* 2 task 
let inputN = prompt("Please enter a number:");


if (!isNaN(inputN)) {
  let number = Number(inputN);
  alert("The number you entered is: " + number);
} else {

  alert("You did not enter a valid number.");
} */



/* task 3
let a = +prompt('a?', '');
console.log(a, typeof a) // string
a = +a
console.log(a, typeof a) // number

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} 


*/
// switch 

/*
let a = +prompt('a?', '');
console.log(a, typeof a) // string
a = +a
console.log(a, typeof a) // number

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
  default:
    alert('I love sandwitch');
}
*/


// 4 task

/*
let sum = 0;

for (let i = 2; i <= 100; i += 2) {
  sum += i;
}

console.log("The sum of all: " + sum);
*/



// task 5
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

let i = 0; 
while (i < 3) {
alert(`number ${i}!`);
i++;
}





