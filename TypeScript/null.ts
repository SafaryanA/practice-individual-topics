/*
Тип null
1.  Объяви переменную data со значением null.
2.  Проверь, равна ли переменная data значению null.
3.  Напиши функцию, которая возвращает null, если строка пустая.
4.  Напиши функцию, которая принимает число и возвращает его или null, если число меньше нуля.
5.  Проверь, отличается ли переменная со значением null от строки "null".
6.  Создай объект с ключами и значениями, где одно из значений — null.
7.  Проверь, есть ли свойство объекта со значением null.
8.  Напиши функцию, которая удаляет элемент из массива и возвращает null, если элемент не найден.
9.  Напиши функцию, которая проверяет, является ли значение переменной null или undefined.
10. Напиши функцию, которая обрабатывает значение или возвращает null, если значение некорректное.
*/

// 1. Объяви переменную data со значением null.
const data: null = null

// 2. Проверь, равна ли переменная data значению null.
console.log('exercise-2 ' + (data === null))

// 3. Напиши функцию, которая возвращает null, если строка пустая.
function getEmptyLine(str: string): null | number {
	const newStr = str.trim()
	return newStr.length === 0 ? null : newStr.length
}

console.log('exercise-3 " " ' + getEmptyLine('   '))
console.log('exercise-3  "Hello, world!"' + getEmptyLine('Hello, world!'))
console.log('exercise-3 "   Some text   "' + getEmptyLine('   Some text   '))

// 4. Напиши функцию, которая принимает число и возвращает его или null, если число меньше нуля.

function getLessZero(num: number): null | number {
	return num < 0 ? null : num
}

console.log('exercise-4  (4)' + getLessZero(4))
console.log('exercise-4 (0)' + getLessZero(0))
console.log('exercise-4 (-5)' + getLessZero(-5))

// 5. Проверь, отличается ли переменная со значением null от строки "null".
console.log('exercise-5 null === "null" ' + (null === 'null'))

// 6. Создай объект с ключами и значениями, где одно из значений — null.
const infoPeople: object = {
	age: 30,
	name: 'Artur',
	Surname: null,
}

// 7. Проверь, есть ли свойство объекта со значением null.
function searchInObject(obj: any): boolean {
	for (let el in obj) {
		if (obj[el] === null) {
			return true
		}
	}
	return false
}

console.log('exercise-7 ' + searchInObject(infoPeople))
function searchInObjectOne(obj: any): boolean {
	return Object.values(obj).includes(null)
}

// 8. Напиши функцию, которая удаляет элемент из массива и возвращает null, если элемент не найден.

function removeFromArray(
	arr: number[] | string[],
	symbol: string | number
): null | number | string {
	for (const el of arr) {
		if (el === symbol) return symbol
	}
	return null
}

console.log(
	'exercise-8 ' + removeFromArray([7, 8, 9, 5, 2, 6, 2, 5, 8, 5, 2, 22], 55)
)
console.log(
	'exercise-8 ' + removeFromArray([7, 8, 9, 5, 2, 6, 2, 5, 8, 5, 2, 22], 2)
)
function removeFromArrayOne(
	arr: (number | string)[],
	symbol: number | string
): null | number | string {
	return arr.includes(symbol) ? symbol : null
}
console.log('exercise-8 ' + removeFromArray([7, 8, 9, 5, 2], 5))
console.log('exercise-8 ' + removeFromArray([7, 8, 9, 5, 2], 55))

// 9. Напиши функцию, которая проверяет, является ли значение переменной null или undefined.
function checkingNullUndefined(variable: any): null | undefined | string {
	// if ( variable === null ){
	// 	return null
	// }else if(variable===undefined){
	// 	return undefined
	// }else{
	// 	return "mismatch of the listed types"
	// }
	switch (variable) {
		case null:
			return null
		case undefined:
			return undefined
		default:
			return 'mismatch of the listed types'
	}
}

function checkingNullUndefinedOne(variable: any): boolean {
	return variable === null || variable === undefined
}

console.log('exercise-9 (undefined)' + checkingNullUndefined(undefined))
console.log('exercise-9 (null)' + checkingNullUndefined(null))
console.log('exercise-9  (7)' + checkingNullUndefined(7))

// 10. Напиши функцию, которая обрабатывает значение или возвращает null, если значение некорректное.

function processValue<T, R>(
	value: T | null | undefined,
	processor: (value: T) => R
): R | null {
	if (value === null || value === undefined) {
		return null
	}
	try {
		return processor(value)
	} catch {
		return null
	}
}

const uppercase = processValue('hello', val => val.toUpperCase())
console.log(uppercase)

// const invalidUppercase = processValue(null, val => val.toUpperCase())
// console.log(invalidUppercase)
