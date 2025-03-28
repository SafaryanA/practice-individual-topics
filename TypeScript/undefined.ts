/*
Тип undefined
1.  Объяви переменную x и не присваивай ей значение.
2.  Проверь, равна ли переменная x значению undefined.
3.  Напиши функцию, которая возвращает undefined.
4.  Создай объект с необязательным свойством и проверь, возвращает ли оно undefined.
5.  Проверь, есть ли элемент в массиве по индексу, который выходит за границы массива.
6.  Напиши функцию, которая возвращает undefined, если значение не передано.
7.  Проверь, отличается ли переменная со значением undefined от числа 0.
8.  Напиши функцию, которая проверяет, является ли значение переменной undefined.
9.  Напиши функцию, которая возвращает значение свойства объекта или undefined, если свойство отсутствует.
10. Напиши функцию, которая проверяет, существует ли переданный параметр.
*/

// 1. Объяви переменную x и не присваивай ей значение.
let i

// 2. Проверь, равна ли переменная x значению undefined.
console.log('exercise-2 (undefined ) ' + i)

// 3. Напиши функцию, которая возвращает undefined.
function valueefined(val: any): any {
	return val === undefined ? undefined : val
}

let c = 7
console.log('exercise-3 (uppercase)' + valueefined(i))
console.log('exercise-3 (7)' + valueefined(c))
// 4. Создай объект с необязательным свойством и проверь, возвращает ли оно undefined.
const obj: { age: number; name?: string } = {
	age: 45,
	name: 'Artur',
}
console.log
'exercise-4 ' + obj.name
// 5. Проверь, есть ли элемент в массиве по индексу, который выходит за границы массива.
const arrNum: number[] = [1, 2, 5, 6, 4, 9]

function oveHorizon(arr: number[]): any {
	return arr[arr.length]
}

console.log('exercise-5' + oveHorizon(arrNum))

// 6. Напиши функцию, которая возвращает undefined, если значение не передано.
function returnUnde(arg: any): any {
	if (arg === undefined) {
		return undefined
	}
}

// console.log('exercise-6 ' + returnUnde())
console.log('exercise-6 ' + returnUnde(145))

// 7. Проверь, отличается ли переменная со значением undefined от числа 0.
console.log(undefined === 0)

// 8. Напиши функцию, которая проверяет, является ли значение переменной undefined.
function getCheckUndefined(arg: any): any {
	if (arg === undefined) {
		return undefined
	}
}

// 9. Напиши функцию, которая возвращает значение свойства объекта или undefined, если свойство отсутствует.
const newObj = {
	name: 'Artur',
	age: undefined,
	surname: 'Safaryan',
}

function objectProperties(obj: any): any {
	for (const el in obj) {
		return obj[el] === undefined
	}
}
console.log('exercise-6 ' + objectProperties(newObj))
const newObjOne = {
	name: 'Artur',
	age: undefined,
	surname: 'Safaryan',
}

function objectProperty(obj: any, property: string): any {
	return obj.hasOwnProperty(property) ? obj[property] : undefined
}

console.log('exercise-9 name: ' + objectProperty(newObjOne, 'name'))
console.log('exercise-9 middleName: ' + objectProperty(newObjOne, 'middleName'))

// 10. Напиши функцию, которая проверяет, существует ли переданный параметр.
function parameterExists(param: any): boolean {
	return param !== undefined
}
console.log('exercise-10 undefined: ' + parameterExists(undefined)) // false
console.log('exercise-10 7: ' + parameterExists(7)) // true
console.log('exercise-10 null: ' + parameterExists(null)) // true
