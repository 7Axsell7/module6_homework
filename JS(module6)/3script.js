//Задание 3.
//Написать функцию, которая принимает 
//число как аргумент и возвращает 
//функцию, которая также принимает
// число как аргумент и возвращает
// сумму этих двух чисел.Выведите в 
//консоль результат.


// как вариант

let numSum = function (a, b) { 
   return (num1 + b());
 };
let num1 = 333;
let num2 = function () {
    return 4 
   };
console.log(numSum(num1, num2));


//-----правильный ниже

function showSum(a) {
   return function (b) {
      return a + b;
   }
}
console.log(showSum(5)(7));

//либо

const showSum = (a) => (b) => a + b;
console.log(showSum(5)(7));