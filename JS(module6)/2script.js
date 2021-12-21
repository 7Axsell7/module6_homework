//Задание 2.
//Написать функцию, которая принимает на входе 
//любое число(но не больше 1 000),
// определяет, является ли оно простым,
// и выводит простое число или нет.
//Если введено больше 1 000, то выводится сообщение,
// что данные неверны.Обратите внимание
// на числа 0 и 1

function isPrime(num) {
   let symple = 'простое', difficult = 'не простое', incorrect = 'данные не верны';

   if (num <= 1) {
      return difficult;
   }else if (num > 1000) {
      return incorrect;
   };
   for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
         return difficult;
      }
   }
   return symple;
}
console.log(isPrime(0))
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(1000));
console.log(isPrime(1001));