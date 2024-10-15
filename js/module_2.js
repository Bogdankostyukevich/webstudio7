// ЗАДАЧА №1
// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// function checkAge(age) {
//     if (age >= 18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// ЗАДАЧА №2
// Функція checkPassword отримує пароль користувача у параметр password,
// перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }

//     return "Access denied, wrong password!";
//     // Change code above this line
//   }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("jqueryismyjam"));

// ЗАДАЧА №3
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// function checkStorage(available, ordered) {
//     // Change code below this line

//     if (ordered === 0) {
//       return "Your order is empty!";
//     } if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     }

//       return "The order is accepted, our manager will contact you";
  
//     // Change code above this line
//   }
  
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ЗАДАЧА №4
// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// ЗАДАЧА №5
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

//  Ім'я змінної	    Значення змінної
// firstElement	      перший елемент масиву
// secondElement	  другий елемент масиву
// lastElement	      останній елемент масиву

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// console.log(firstElement);

// const secondElement = fruits[1];
// console.log(secondElement);

// const lastElement = fruits[3];
// console.log(lastElement);

// ЗАДАЧА №6
// Виконай перевизначення значення елементів з індексами 1 і 3.
// Заміни "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// ЗАДАЧА №7
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits,
// використовуючи властивість length.

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);


// ЗАДАЧА №8
//   Ім'я змінної	                              Очікуване значення
// lastElementIndex	     Індекс останнього елемента масиву fruits через довжина.масиву - 1
// lastElement	         Значення останнього елемента масиву

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// ЗАДАЧА №9
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини.
// Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//     // Change code below this line
//     const firstElement = array[0];
//     const lastElement = array[array.length -1];
  
//     return [firstElement, lastElement];
//     // Change code above this line
//   }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// ЗАДАЧА №10
// Доповни код функції splitMessage(message, delimiter).
// Вона повинна розбити рядок message за вказаним роздільником delimiter і зберегти отриманий масив рядків у змінній words.

// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//     words = message.split(delimiter);
//     // Change code above this line
//     return words;
// }
  
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// ЗАДАЧА №11
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок,
// що складається зі слів, розділених лише пробілами(параметр message) та ціну гравірування одного слова(параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     let totalPrice = message * pricePerWord;
//     return message.split(' ').length * pricePerWord


//     return pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// ЗАДАЧА №12
// Доповни код функції makeStringFromArray(array, delimiter) таким чином,
// щоб вона повертала у змінній string результат
// з'єднання елементів масиву array з роздільником delimiter - рядок.

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);


//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"))

// ЗАДАЧА №13
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   let slug;
//   // Change code below this line
//   return slug = title.toLowerCase().split(" ").join("-");
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// ЗАДАЧА №14
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const index = fruits.indexOf('orange');
// console.log(index);
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2); // ["apple", "plum"]
// const nonExtremeEls = fruits.slice(1, 4); // ["plum", "pear", "orange"]
// const lastThreeEls = fruits.slice(-3); // ["pear", "orange", "banana"]


// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ЗАДАЧА №15
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// ЗАДАЧА №16
// Напиши функцію під назвою makeArray, яка приймає три параметри:
// firstArray(масив), secondArray(масив) та maxLength(число).
// Функція повинна створювати новий масив, який містить всі елементи з firstArray,
// а потім всі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength,
// функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку, функція повинна повернути весь новий масив.

// function makeArray(firstArray, secondArray, maxLength) {

//     return firstArray.concat(secondArray).slice(0, maxLength);
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// ЗАДАЧА №17
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// ЗАДАЧА №18
// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа.
// Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//     // Change code below this line

//     let total = 0;
//     for (let i = 0; i <= number; i++) {
//         total += i;
//     }
    
//     return total;
//     // Change code above this line
// }
   
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

// ЗАДАЧА №19
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ЗАДАЧА №20
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів.
// Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (let i = 0; i < order.length; i += 1){
//         total += order[i];
//     }

//     return total;
// }

// console.log(calculateTotalPrice([12, 18, 14, 10, 111]));
// console.log(calculateTotalPrice([1, 2, 3, 4, 5]));
// console.log(calculateTotalPrice([12, 181, 114, 110, 1111]));
// console.log(calculateTotalPrice([2, 8, 4, 1, 11]));

// АЛЬТЕРНАТИВА (for of)
// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const value of order) {
//         total += value;
//     }

//     return total;
// }

// ЗАДАЧА №21
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
// розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// Поради:
// Використовуй метод split() для розбиття рядка на масив слів за роздільником пробілу (' ').
// Ініціалізуй змінну longestWord першим словом з масиву.
// Пройдись по масиву слів за допомогою циклу та порівняй довжину кожного слова з довжиною longestWord.
// Якщо знайдено слово, що довше, онови змінну longestWord.
// Поверни longestWord.

// function findLongestWord(string) {
//     // Change code below this line
//     let wordLength = 0;
//     let longestWord;
//     string = string.split(" ");
//     // console.log(string);

//     for (let i = 0; i <= string.length -1; i += 1) {

//         if (wordLength < string[i].length) {
//             wordLength = string[i].length;
//             longestWord = string[i];
//         }
//     }

//     return longestWord;
//     // Change code above this line
// }
  
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// ЗАДАЧА №22

// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i = min; i <= max; i += 1){
//         numbers.push(i)
//     }
//     // Change code above this line
//     return numbers;
//   }
  
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(24, 34));

///////////////////////////////////
// function foo() {
//     console.log(arguments);
// }
// foo(5, "Mango", true);

//////////////////////////////////////////
// function add() {
//     let total = 0;

//     for (const value of arguments) {
//         total += value
//     } if (total > 90) {
//         return true
//     }

//     return false
// }

// console.log(add(5, 7, 15, 29, 88));
// console.log(add(5, 17, 10, 15, 8, 21, 14,));
// console.log(add(5, 17, 10, 15, 8, 45, 75, 69));
///////////////////////////////////////////////////////////////////
// function createString(name, year) {
//     const result = add(year);

//     return `${name} year ${result}`;
// }

// console.log(createString('Mango', [1, 2, 3, 4, 5]));

// function add(arr) {
//     let total = 0;

//     for (const value of arr) {
//         total += value
//     }
//     return total;
// }
//////////////////////////////////////////////////////////////////
// function mass(items) {
//     for (let i = 0, num = 1; i < items.length; i += 1, num += 1) {
//         console.log(`${num} ~ ${items[i]}`)
//     }
// }
// mass(['Ukraine', 'Usa', 'London', 'Italy', 'Congo', 'Japan']);
// mass(['never give up', 'thank you', 'good job', 'relax', 'who are you', 'technologies']);
/////////////////////////////////////////////////////////////////////////////////////////////
// пошук найбільшого числа в рядку;
// function maxNumbers() {
//     const arr = [...arguments]
//     // console.log(arr)
//     let max = arr[0];

//     for (const num of arguments) {
//         if (num > max) {
//             max = num
//         }
//     }

//     return max;
// }

// console.log(maxNumbers(15, 78, 12, 4, 200));
// console.log(maxNumbers(15, 78, 12, 4, 200, 501));
//////////////////////////////////////////////////////////////////////
// повернути середнє значення рядка
// function calAverage() {
//     console.log(arguments);
//     let total = 0;

//     for (const num of arguments) {
//         total += num;
//     }

//     return total / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4, 5));
// console.log(calAverage(11, 12, 31, 45, 15));
// console.log(calAverage(15, 72, 93, 54, 775));
///////////////////////////////////////////////////////
// Напиши функфію formatTime(minutes) яка повертає значення
// minutes (кількість хвилин) у рядок у форматі години та хвилини HH:MM.
// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     minutes = minutes % 60;
//     // console.log(hours, minutes);

//     return `${hours.toString().padStart(2, '0')}
//     : ${minutes.toString().padStart(2, '0')}`;
// }

// console.log(formatTime(90)); // 01 : 30
// console.log(formatTime(450)); // 7 : 30
// console.log(formatTime(1441)); // 24 : 01
///////////////////////////////////////////////////////////////////////////////
// ЗАДАЧА №23
// Доповни код функції filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Усередині функції:
// Створи попрожній масив newArray.
// Використай цикл for для ітерації кожного елемента масиву numbers.
// Додай умовний оператор if всередині циклу для перевірки, чи поточний елемент є більшим за value.
// Якщо так, використай метод push для додавання елемента до newArray.
// Поверни newArray як результат.

// function filterArray(numbers, value) {
//     let newArrey = [];
// // console.log(newArrey)
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArrey.push(numbers[i]);
//         }
//     }
    
//     return newArrey;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ЗАДАЧА №24
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     if (fruits.includes(fruit)) {
//         return true;
//     }
//     return false;// Change this line
//   }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// ЗАДАЧА №25
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах.
// А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Доповни код функції getCommonElements(array1, array2), яка приймає два масиви (array1 та array2)
// довільної довжини в якості параметрів.Усередині функції:
// Створи порожній масив з назвою newArray.
// Використай цикл for для ітерації кожного елемента у array1.
// У середині циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, додай елемент до newArray за допомогою методу push.
// Поверни newArray як результат.

// function getCommonElements(array1, array2) {
//     // Change code below this line
//     let newArray = [];

//     for (const value of array1) {
//         if (array2.includes(value)) {
//             newArray.push(value);
//         }
//     }
  
//     return newArray;
//    // Change code above this line
// }
  
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ЗАДАЧА №26
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     // for (let i = 0; i < order.length; i += 1) {
//     //   total += order[i];
//     // }

//     for (const value of order) {
//         total += value;
//     }
  
//     // Change code above this line
//     return total;
//   }
  
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// ЗАДАЧА №27
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   const number = numbers[i];

//     for (const number of numbers) {
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ЗАДАЧА №28
// Заповни відсутні значення дільника для виразів з модулем.
// Заміни кожен випадок відповідним значенням дільника, щоб вирази обчислювалися правильно.
// змінна a має бути числом 0
// змінна b має бути числом 1
// змінна c має бути числом 3
// змінна d має бути числом 5
// змінна e має бути числом 2

// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// ЗАДАЧА №29
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).Використовуй цикл "for".

// function getEvenNumbers(start, end) {
//     // Change code below this line
//     let mass = [];

//     for (let i = start; i <= end; i += 1) {
//         if ([i] % 2 === 0) {
//             mass.push(i);
//         }
//     }
 
//     return mass;
//      // Change code above this line
// }
   
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// ЗАДАЧА №30
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//         return number;
//       }
//     }
//     // Change code above this line
//   }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

// ЗАДАЧА №31
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, 
// чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
// Тобі потрібно реалізувати свою власну логіку для виконання цього завдання. Розглянь вибір методу ітерації,
// який пройде по всьому масиву(array), і на кожній ітерації перевірятиме, чи дорівнює елемент масиву value.
// Якщо так, поверни true, в іншому випадку поверни false.

// function includes(array, value) {
//     // Change code below this line
//     // for (let i = 0; i <= array.length; i += 1) {

//     //     if (array[i] === value) {
//     //         return true;
//     //     }
//     // } 

//     // return false;
//     // Change code above this line
// }
  
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
