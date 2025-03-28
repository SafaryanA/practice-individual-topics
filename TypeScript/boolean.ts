/*
Тип boolean
1.  Объяви переменную isComplete и присвой ей значение true.
2.  Напиши функцию, которая принимает число и возвращает true, если оно больше нуля.
3.  Проверь, являются ли оба значения true (логическое И).
4.  Проверь, является ли хотя бы одно значение true (логическое ИЛИ).
5.  Инвертируй значение false.
6.  Напиши условие, проверяющее, что строка "TypeScript" содержит букву "S".
7.  Проверь, больше ли число 15, чем 10, и меньше ли оно 20.
8.  Напиши функцию, которая проверяет, является ли год високосным.
9.  Напиши функцию, которая возвращает true, если строка пустая.
10. Напиши функцию, которая проверяет, является ли число простым.
*/

// 1. Объяви переменную isComplete и присвой ей значение true.
const isComplete: boolean = true

// 2. Напиши функцию, которая принимает число и возвращает true, если оно больше нуля.
function checkingForZero(num: number): boolean {
	return num > 0
}

console.log('exercise-2 (4)' + checkingForZero(4))
console.log('exercise-2  (0)' + checkingForZero(0))

// 3. Проверь, являются ли оба значения true (логическое И).
function doubleTrue(x: number, y: number): boolean {
	return x > 0 && y > 0
}

console.log('exercise-3(4 , 5) ' + doubleTrue(4, 5))
console.log('exercise-3(0, 8) ' + doubleTrue(0, 8))

// 4. Проверь, является ли хотя бы одно значение true (логическое ИЛИ).
function oneTrue(x: number, y: number): boolean {
	return x > 0 || y > 0
}

console.log('exercise-4 (47, 85) ' + oneTrue(47, 85))
console.log('exercise-4 (0, 11) ' + oneTrue(0, 11))
console.log('exercise-4 (0, 0) ' + oneTrue(0, 0))

// 5. Инвертируй значение false.
const invertValue = !false

console.log('exercise-5  !false' + invertValue)

// 6. Напиши условие, проверяющее, что строка "TypeScript" содержит букву "S".
function searchSymbol(str: string, symbol: string): boolean {
	return str.includes(symbol)
}

console.log('exercise-6 ' + searchSymbol('TypeScript', 'S'))

// 7. Проверь, больше ли число 15, чем 10, и меньше ли оно 20.
function checkNumber(x: number, y: number, z: number): boolean {
	return x > y && x < z
}
console.log('exercise-7 (15 > 10 < 20) ' + checkNumber(15, 10, 20))
console.log('exercise-7 (8 > 30 < 10) ' + checkNumber(8, 30, 10))

// 8 Напиши функцию, которая проверяет, является ли год високосным.
function leapYear(x: number): boolean {
	return x % 4 === 0 && (x % 100 !== 0 || x % 400 === 0)
}
console.log('exercise-8 (1990) ' + leapYear(1990))
console.log('exercise-8 (1991) ' + leapYear(1991))

// 9. Напиши функцию, которая возвращает true, если строка пустая.
function checkEmptyString(str: string): boolean {
	const trimStr: string = str.trim()
	return trimStr.length === 0
}

console.log('exercise-9 (Artur)' + checkEmptyString('Artur'))
console.log('exercise-9  ("")' + checkEmptyString(''))

// 10. Напиши функцию, которая проверяет, является ли число простым.
function primeNumber(num: number): boolean {
	if (num < 2) return false
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false
		}
	}
	return true
}

console.log('exercise-10 ' + primeNumber(43))
console.log('exercise-10 ' + primeNumber(44))
