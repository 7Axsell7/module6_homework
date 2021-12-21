//Задание 4.
//Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить в консоль,
// начиная от первого и заканчивая вторым.
// Используйте setInterval.
//Например, пользователь ввёл числа 5 и 15.
// Каждую секунду в консоль должно печататься число,
// начиная с 5 и 
//заканчивая 15(всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

function printNumbers() {
   let i = 5;
   let timerId = setInterval(function () {
      console.log(i);
      if (i === 15) clearInterval(timerId);
      i++;
   }, 1000);
}
printNumbers()



// Точнее вот так , если по заданию функция принимает 2 числа
function printNumbers(a, b) {
   let i = a;
   let timerId = setInterval(function () {
      console.log(i);
      if (i === b) {
         clearInterval(timerId);
      }
      i++;
   }, 1000);
}
printNumbers(5, 15);

// Или так

function printNumbers(a, b) {
   let i = a;
   setTimeout(function start() {
      console.log(i);
      if (i < b) {
         setTimeout(start, 1000);
      }
      i++;
   }, 1000);
}
printNumbers(5, 15);
