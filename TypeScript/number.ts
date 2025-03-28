/*
Тип number
1.  Объяви переменную age и присвой ей значение 25.
2.  Найди остаток от деления числа 15 на 4.
3.  Возведи число 3 в степень 4.
4.  Проверь, является ли число 10 четным.
5.  Напиши функцию, которая принимает два числа и возвращает их сумму.
6.  Найди наибольшее из трех чисел.
7.  Сгенерируй случайное число от 0 до 100.
8.  Преобразуй строку "42" в число.
9.  Проверь, является ли число целым.
10. Напиши функцию, которая принимает число и возвращает его факториал.
*/

// 1. Объяви переменную age и присвой ей значение 25.

const age: number = 25
console.log('exercise-1 ' + age)

// 2. Найди остаток от деления числа 15 на 4.
const remainder: number = 15 % 4
console.log('exercise-2 ' + remainder)

// 3. Возведи число 3 в степень 4.
const pow = Math.pow(3, 4)
console.log('exercise-3 ' + pow)

// 4. Проверь, является ли число 10 четным.
function oddOrEven(num: number): boolean {
	return num % 2 === 0
}

console.log('exercise-4 ' + oddOrEven(15))

// 5. Напиши функцию, которая принимает два числа и возвращает их сумму.

function returnSum(x: number, y: number): number {
	return x + y
}

console.log('exercise-5 ' + returnSum(7, 8))

// 6. Найди наибольшее из трех чисел.
function getMaxNum(arr: number[]): number {
	return Math.max(...arr)
	// let maxNum = arr[ 0 ]
	// for ( let i = 1; i < arr.length; i++ ) {
	// 	maxNum = maxNum > arr[ i ] ? maxNum : arr[ i ]
	// }
	// return maxNum
}

console.log('exercise-6 ' + getMaxNum([7, 8, 9]))
// 7. Сгенерируй случайное число от 0 до 100.
function randomNum(): number {
	return Math.floor(Math.random() * 101)
}

console.log('exercise-7 ' + randomNum)
// 8. Преобразуй строку "42" в число.
function convertNum(str: string): number {
	// return +str
	return Number(str)
}

console.log('exercise-8 ' + convertNum('42'))

// 9. Проверь, является ли число целым.

function getIsInteger(num: number): boolean {
	return Number.isInteger(num)
}

console.log('exercise-9 ' + getIsInteger(42))
console.log('exercise-9 ' + getIsInteger(42.5))

// 10. Напиши функцию, которая принимает число и возвращает его факториал.

function getFactorial(fac: number): number {
	let num: number = 1
	for (let i = 1; i < fac; i++) {
		num = num * i
	}
	return num
}

console.log('exercise-10 ' + getFactorial(5))
