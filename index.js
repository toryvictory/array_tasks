'use strict';

/*Работа с concat
Для решения задач данного блока вам понадобятся следующие методы: concat.
    1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(`Concatinated array: ${arr1.concat(arr2)}`);

/*
Работа с reverse
Для решения задач данного блока вам понадобятся следующие методы: reverse.
    2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
*/

console.log(`Reversed array: ${arr1.reverse()}`);

/*Работа с push, unshift
Для решения задач данного блока вам понадобятся следующие методы: push, unshift.
   3.  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.*/

const arr3 = [1, 2, 3];
arr3.push(4,5,6,);
console.log(`Array with pushed elements: ${arr3}`);


/*4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.*/

const arr4 = [1, 2, 3];
arr4.unshift(4,5,6,);

console.log(`Shifted array: ${arr4}`);

/*Работа с shift, pop
Для решения задач данного блока вам понадобятся следующие методы: shift, pop.
    5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.*/

const arr5 = ['js', 'css', 'jq'];
console.log(arr5[0]);
console.log(`First element of array: ${arr5.shift()}`);

/*    6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.*/

const arr6 = ['js', 'css', 'jq'];
console.log(`Last element of array: ${arr6.pop()}`);

/*Работа с slice
Для решения задач данного блока вам понадобятся следующие методы: slice.
    7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].*/
const arr7 = [1, 2, 3, 4, 5];

const arr8 = arr7.slice(0,3);
console.log(`Sliced array: ${arr8}`);

/* 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].*/

const arr9 = arr7.slice(3,5);
console.log(`Sliced array: ${arr9}`);

/*Работа с splice
Для решения задач данного блока вам понадобятся следующие методы: splice.
    9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/

arr7.splice(1,2);
console.log(`Spliced array: ${arr7}`);

/* 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].*/

const arr10 = [1, 2, 3, 4, 5];
arr10.splice(0,1);
arr10.splice(3,1);
console.log(`Spliced array: ${arr10}`);

/*11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/

const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0,'a', 'b', 'c' );
console.log(`Spliced array: ${arr11}`);

/*12.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0,'a', 'b');
arr12.splice(6, 0,'c');
arr12.splice(8, 0,'e');
console.log(`Spliced array: ${arr12}`);

/*Работа с sort
Для решения задач данного блока вам понадобятся следующие методы: sort.
    13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/

const arr13 = [3, 4, 1, 2, 7];
console.log(`Sorted array: ${arr13.sort()}`);


/*Работа с Object.keys
Для решения задач данного блока вам понадобятся следующие методы: Object.keys.
    14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.*/

const obj1 = {
    js:'test', jq: 'hello', css: 'world'
};
console.log(`Array of object keys: ${Object.keys(obj1)}`);


