// let num = 0;
// while (num != 100) {
//     console.log(++num)
// }


// let num = 10;
// while (num != 33) {
//     console.log(++num)
// }


// for(i=2; i <= 100; i += 2) {
//     console.log(i);
// }


// let array = [1, 2, 3, 4, 5];
// for (i in array) {
//     console.log(++i);
// }


// let array = [1, 2, 3, 4, 5];
// let sum = 0;
// for (i = 0; i < 5; i++) {
//     sum += array[i]
// }
// console.log(sum);


// var obj = {gren: 'зелёный', red: 'красный', blue: 'голубой'}
// for (x in obj) {
//     console.log(x + ': ' + obj[x]);
// }


// var obj = {Коля: '200', Вася: '300', Петя: '400'};
// for (x in obj) {
//     console.log(`${x} - зарплата ${obj[x]} долларов`);
// }


// let array = [2, 5, 9, 15, 0, 4];
// for (i=0; i < array.length; i++) {
//     if (array[i] > 3 && array[i] < 10) {
//         console.log(array[i]);
//     }
// }


// let array = prompt('Введите числа масива через пробел');
// let summ = 0;
// array = array.split(' ');
// for (i = 0; i < array.length; i++) {
//     if (Number(array[i]) >= 0) {
//         summ += Number(array[i])
//     }
// }
// console.log(summ);


// let array = [1, 2, 5, 9, 4, 13, 4, 10];
// for (i=0; i < array.length; i++) {
//     if (array[i] == 4) {
//         console.log('Есть!');
//            break;
//     }
// }


// let array = [10, 20, 30, 50, 235, 3000];
// for (i=0; i < array.length; i++) {
//     if (String(array[i])[0] == 1 || String(array[i])[0] == 2 || String(array[i])[0] == 5) {
//         console.log(array[i]);
//     }
// }


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let string = ''
// for (i=0; i < array.length; i++) {
//     string += '-' + String(array[i])
// }
// console.log(string);


// let array = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// for (i=0; i < array.length; i++) {
//     if (i < 5) {
//         document.body.insertAdjacentHTML('beforeEnd', array[i] + ' ');
//     } else {
//         document.body.insertAdjacentHTML('beforeEnd', '<b>' + array[i] + '</b>' + ' ')
//     }
// }


// let array =  ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let day = new Date;
// for (i=0; i < array.length; i++) {
//     if (i == day.getDay()) {
//         document.body.insertAdjacentHTML('beforeEnd', '<i>' + array[i] + '</i>' + ' ')
//     } else {
//         document.body.insertAdjacentHTML('beforeEnd', array[i]+ ' ')
//     }
// }


// let n = 1000, num = 0;
// for (i=0; n > 50; i++) {
//     n = n/2
//     num++
// }
// console.log(`Получившееся число: ${n} \n Количество итераций: ${num}`);