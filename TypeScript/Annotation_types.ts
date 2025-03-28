/*
 Type annotations
 1. Напишите функцию, которая принимает два числа и возвращает их разность.
 2. Реализуйте функцию, которая принимает строку и возвращает её длину.
 3. Создайте функцию, которая принимает массив строк и возвращает их объединение в одну строку.
 4. Напишите функцию, которая принимает boolean и возвращает его инверсию.
 5. Реализуйте функцию, которая принимает массив чисел и возвращает их среднее.
 6. Напишите функцию с параметром по умолчанию и аннотацией типа.
 7. Создайте функцию, которая принимает строку и необязательный булевой параметр.
 8. Реализуйте функцию, которая возвращает объект с полями id: number и name: string.
 9. Напишите функцию, которая принимает Date и возвращает строку в формате ISO.
 10. Реализуйте функцию, которая принимает два параметра разных типов и возвращает массив из этих параметров.
 */

// 1. Напишите функцию, которая принимает два числа и возвращает их разность.
function returnDifference(a: number, b: number): number {
	return a - b
}

// 2. Реализуйте функцию, которая принимает строку и возвращает её длину.
function returnLength(str: string): number {
	return str.length
}

// 3. Создайте функцию, которая принимает массив строк и возвращает их объединение в одну строку.
function mergeIntoOneLine(arr: string[]): string {
	return arr.join('')
}

console.log(mergeIntoOneLine(['hay', 'as', 'tan']))

// 4. Напишите функцию, которая принимает boolean и возвращает его инверсию.
function inversionBoolean(bool: boolean): boolean {
	return !bool
}

// 5. Реализуйте функцию, которая принимает массив чисел и возвращает их среднее.
function returnAverage(arr: number[]): number {
	const sum = arr.reduce((acc, num) => acc + num, 0)
	return sum / arr.length
}
console.log(returnAverage([7, 8, 9, 4, 5, 6, 1, 3]))

// 6. Напишите функцию с параметром по умолчанию и аннотацией типа.
function defaultParam(x: number = 7, y: number = 6): number {
	return x + y
}

// 7. Создайте функцию, которая принимает строку и необязательный булевой параметр.
function optionallyProcessString(
	str: string,
	bool?: boolean
): string | boolean {
	return bool ? str.toUpperCase() : str.toLowerCase()
}
console.log(optionallyProcessString('Hello'))
console.log(optionallyProcessString('Hello', true))

// 8. Реализуйте функцию, которая возвращает объект с полями id: number и name: string.
interface returnUserInterface {
	id: number
	name: string
}
function returnUser(id: number, name: string): returnUserInterface {
	return { id, name }
}

console.log(returnUser(4, 'Artur'))
// 9. Напишите функцию, которая принимает Date и возвращает строку в формате ISO.
function returnStringData(date: Date): string {
	return date.toString()
}

console.log(returnStringData(new Date()))
// 10. Реализуйте функцию, которая принимает два параметра разных типов и возвращает массив из этих параметров.
function returnArrTwoParams(valOne: number, valTwo: string): [number, string] {
	return [valOne, valTwo]
}

console.log(returnArrTwoParams(7, 'Artur'))
