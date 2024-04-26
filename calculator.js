let inputvalue = document.getElementById("textinput");
let ans = document.getElementById("ans");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let divison = document.getElementById("division");
let mul=document.getElementById("mul");

let comment = "";
let clear = document.getElementById("clear");
zero.addEventListener("click", function () {
  comment = 0;
  inputvalue.value += comment;
});
one.addEventListener("click", function () {
  comment = 1;
  inputvalue.value += comment;
});
two.addEventListener("click", function () {
  comment = 2;
  inputvalue.value += comment;
});
three.addEventListener("click", function () {
  comment = 3;
  inputvalue.value += comment;
});
four.addEventListener("click", function () {
  comment = 4;
  inputvalue.value += comment;
});
five.addEventListener("click", function () {
  comment = 5;
  inputvalue.value += comment;
});

six.addEventListener("click", function () {
  comment = 6;
  inputvalue.value += comment;
});
seven.addEventListener("click", function () {
  comment = 7;
  inputvalue.value += comment;
});
eight.addEventListener("click", function () {
  comment = 8;
  inputvalue.value += comment;
});
nine.addEventListener("click", function () {
  comment = 9;
  inputvalue.value += comment;
});
divison.addEventListener("click", function () {
  comment = "/";
  inputvalue.value += comment;
});

minus.addEventListener("click", function () {
  comment = "-";
  inputvalue.value += comment;
});
plus.addEventListener("click", function () {
  comment = "+";
  inputvalue.value += comment;
});

mul.addEventListener("click", function () {
  comment = "*";
  inputvalue.value += comment;
});

ans.addEventListener("click", function () {
  inputvalue.value = eval(inputvalue.value);
});
clear.addEventListener("click", function () {
  inputvalue.value = null;
});

