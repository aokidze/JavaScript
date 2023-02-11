// Repeat basic mathematical operators with examples and display results in a dialog box or web console
// (assignment, addition, subtraction, multiplication, division, taking the remainder of division, exponentiation)

let numOne = 15;
let numTwo = 5;
alert(numOne + numTwo);
alert(numOne - numTwo);
alert(numOne * numTwo);
alert(numOne / numTwo);
alert(numOne ** numTwo);
alert(numOne % numTwo);

// Repeat the comparison operators on the examples and display the results in a dialog box or web console.
alert(2 > 1); //больше
alert(2 == 1); //равно
alert(2 != 1); //неравно
alert(2 >= 1); //больше или равно
alert(2 <= 1); //меньше или равно

// Make a conditional branching using if / else / else if operator with several conditions. (at least 3 conditions). Output the result to a dialog box or web console.
let points = 0;
let taskOne = prompt("10+10");
if (taskOne == 20) {
  alert("Nice!");
  points = points + 1; //решил добавить счетчик для правильных ответов,чтобы было веселее)))(Саркисян А.А. 3-JSKB-3 )
} else {
  alert("And that's wrong!");
}
let taskTwo = prompt("10*10");
if (taskTwo == 100) {
  alert("well done!");
  points = points + 1;
} else {
  alert("And that's wrong!");
}
let taskTree = prompt("10/10");
if (taskTree == 1) {
  alert("Nice!");
  points = points + 1;
} else {
  alert("And that's wrong!");
}
alert(points); //Объявляем наш результат правильных ответов )

// Rewrite the code with the conditional "if/else" statement from the previous paragraph using the "switch" construct.
let x = 5 + 3;
switch (x) {
  case 5:
    alert("неправильно");
    break;
  case 10:
    alert("неправильно");
    break;
  case 8:
    alert("Молодец!");
    break;
  default:
    alert("Нет таких значений");
}
