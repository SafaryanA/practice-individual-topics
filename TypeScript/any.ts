/*
Тип any
1.  Объяви переменную с типом any и присвой ей строку.
2.  Измени значение переменной any на число.
3.  Напиши функцию, которая принимает параметр с типом any и возвращает его тип.
4.  Преобразуй значение переменной any в строку.
5.  Используй переменную any в вычислении и проверь результат.
6.  Создай массив с типом any[] и добавь разные типы значений.
7.  Напиши функцию, которая принимает массив типа any[] и выводит его элементы.
8.  Присвой переменной any значение объекта и обратись к его свойству.
9.  Проверь, что произойдет, если вызвать несуществующий метод у переменной any.
10. Напиши функцию, которая принимает переменную типа any и безопасно проверяет ее тип.
*/

// 1. Объяви переменную с типом any и присвой ей строку.

let txt: any = 'Hello, World!'
// 2.  Измени значение переменной any на число.
txt = 123

// 3. Напиши функцию, которая принимает параметр с типом any и возвращает его тип.

function whatType(symbol: any): any {
	return typeof symbol
}

console.log('exercise-3 (7) ' + whatType(7))
console.log('exercise-3 (NaN) ' + whatType(NaN))
console.log("exercise-3 '77' " + whatType('77'))
console.log('exercise-3 undefined ' + whatType(undefined))
console.log('exercise-3 null ' + whatType(null))
console.log('exercise-3 undefined [777]' + whatType([777]))

// 4. Преобразуй значение переменной any в строку.

function ConvertString(num: number): string {
	// return String(num)
	return '' + num
}

console.log('exercise-4' + ConvertString(txt))

// 5. Используй переменную any в вычислении и проверь результат.
console.log('exercise-5' + (txt - 7))
// 6. Создай массив с типом any[] и добавь разные типы значений.
const variousArr: any[] = [
	7,
	8,
	'Artur',
	null,
	undefined,
	[7, 8],
	{ x: 1, y: 2 },
]

// 7. Напиши функцию, которая принимает массив типа any[] и выводит его элементы.
function elementsType(arr: any[]): void {
	for (const el of arr) {
		console.log('exercise-6' + el)
	}
}

elementsType(variousArr)

// 8. Присвой переменной any значение объекта и обратись к его свойству.
txt = {
	name: 'Artur',
	age: 30,
	surname: 'Safaryan',
}
console.log('exercise-8 txt.age ' + txt.age)
// 9. Проверь, что произойдет, если вызвать несуществующий метод у переменной any.
if (typeof txt.age === 'function') {
	console.log(txt.age())
} else {
	console.log('txt.age is not a function')
}

console.log('exercise-9 txt.age() ' + txt.age())
// 10.Напиши функцию, которая принимает переменную типа any и безопасно проверяет ее тип.

function safeTypeCheck(value: any): string {
	if (value === null) return 'null'
	if (value === undefined) return 'undefined'
	return typeof value
}
console.log('exercise-10 (7) ' + safeTypeCheck(7))
console.log('exercise-10 (null) ' + safeTypeCheck(null))
console.log("exercise-10 ('text') " + safeTypeCheck('text'))
