/*
 Function overloading
 1. Напишите перегруженную функцию для сложения чисел и строк.
 2. Реализуйте перегрузку для функции, принимающей массив чисел или строк.
 3. Напишите функцию для работы с двумя параметрами: строкой или числом.
 4. Реализуйте перегрузку для функции, возвращающей площадь квадрата или прямоугольника.
 5. Создайте функцию для обработки одного числа или массива чисел.
 6. Напишите перегрузку для функции, принимающей дату в формате строки или Date.
 7. Реализуйте перегрузку для функции, которая возвращает длину строки или количество элементов в массиве.
 8. Напишите функцию, которая принимает объект или массив объектов.
 9. Реализуйте перегрузку для функции, принимающей строку или число, и возвращающей их тип.
 10. Создайте перегруженную функцию для работы с массивом строк или чисел.

 */

// 1. Напишите перегруженную функцию для сложения чисел и строк.
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: number | string, b: number | string): number | string {
	if (typeof a === typeof b) {
		return (a as any) + (b as any)
	}
	throw new Error('Unknown type')
}

console.log(add(2, 3)) // 5
console.log(add('Hello, ', 'World!'))

// 2. Реализуйте перегрузку для функции, принимающей массив чисел или строк.
function arrayString(val: string): string
function arrayString(val: string[]): string
function arrayString(val: string | string[]): string {
	return typeof val === 'string' ? `String: ${val}` : `Array: ${val.join(', ')}`
}

console.log(arrayString('Hello'))
console.log(arrayString(['One', 'Two', 'Three']))

// 3. Напишите функцию для работы с двумя параметрами: строкой или числом.
function numberString(val: number): string
function numberString(val: string): string
function numberString(val: number | string): string {
	return typeof val === 'number' ? `Number: ${val}` : `String: ${val}`
}
console.log(numberString(42))
console.log(numberString('Hello'))

// 4. Реализуйте перегрузку для функции, возвращающей площадь квадрата или прямоугольника.
function getArea(val: 'square', x: number): number
function getArea(val: 'rectangle', x: number, y: number): number
function getArea(val: 'square' | 'rectangle', x: number, y?: number): number {
	if (val === 'square') {
		return x * x
	} else {
		if (y === undefined)
			throw new Error('Ошибка: Прямоугольнику нужны два параметра')
		return x * y
	}
}

// 5. Создайте функцию для обработки одного числа или массива чисел.
function numberArray(val: number): number
function numberArray(val: number[]): number
function numberArray(val: number | number[]): number | never {
	if (typeof val === 'number') {
		return val
	} else if (Array.isArray(val)) {
		return val.reduce((acc, carVal) => acc + carVal, 0)
	} else {
		throw new Error('Unknown number type')
	}
}

// 6. Напишите перегрузку для функции, принимающей дату в формате строки или Date.
function dateTime(val: string): string
function dateTime(val: Date): Date
function dateTime(val: string | Date): string | Date | never {
	if (typeof val === 'string') {
		return val
	} else if (val instanceof Date) {
		return val
	} else throw new Error('Unknown date type')
}

// 7. Реализуйте перегрузку для функции, которая возвращает длину строки или количество элементов в массиве.
function getLength(val: string): number
function getLength(val: any[]): number
function getLength(val: string | any[]): number | never {
	if (typeof val === 'string') {
		return val.length
	} else if (Array.isArray(val)) {
		return val.length
	} else throw new Error('Unknown length type')
}

// 8. Напишите функцию, которая принимает объект или массив объектов.
interface Obj {
	id: number
	name: string
}

function arrayObject(val: Obj): Obj
function arrayObject(val: Obj[]): Obj[]
function arrayObject(val: Obj | Obj[]): Obj | Obj[] {
	return val
}
//
const personOne = { id: 1, name: 'Artur' }
console.log(arrayObject(personOne))
console.log(arrayObject([personOne, { id: 2, name: 'Alice' }]))

// 10. Создайте перегруженную функцию для работы с массивом строк или чисел.
function arrayStringNumber(val: string[]): string
function arrayStringNumber(val: number[]): number
function arrayStringNumber(val: string[] | number[]): string | number {
	if(typeof val[0]==='string'){
		return  (val as string[]).join('')
	}else{
		return (val as number[]).reduce((acc, num)=>acc+num,0)
	}
}

console.log(arrayStringNumber(['Hello', 'World']))
console.log(arrayStringNumber([1, 2, 3, 4]))
