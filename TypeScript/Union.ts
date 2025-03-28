/*
 Union
 1. Создайте переменную, которая может быть строкой или числом.
 2. Напишите функцию, которая принимает строку или массив строк.
 3. Реализуйте функцию, которая возвращает длину строки или сумму массива чисел.
 4. Создайте тип для User | Admin и напишите функцию, которая возвращает роль.
 5. Напишите функцию, которая принимает string | boolean и возвращает строку.
 6. Реализуйте массив с элементами типа number | string.
 7. Напишите функцию, которая принимает null | string и возвращает длину строки.
 8. Создайте объект, который может содержать поля id или name.
 9. Реализуйте функцию, которая принимает массив string | number и фильтрует числа.
 10. Напишите функцию, которая принимает объект с полями age или isAdmin.
 */

// 1. Создайте переменную, которая может быть строкой или числом.
let val1: string | number

// 2. Напишите функцию, которая принимает строку или массив строк.
function stringArrayString(el: string | string[]): void {
	console.log(el)
}

// 3. Реализуйте функцию, которая возвращает длину строки или сумму массива чисел.
function howMuchVisvo(el: string | number[]): number {
	if (typeof el === 'string') {
		return el.length
	} else if (Array.isArray(el)) {
		return el.reduce((acc, cartVal) => acc + cartVal, 0)
	} else {
		console.error(el)
		throw new Error(
			'the function waits for a string or an array of numbers to correctly pass the argument'
		)
	}
}

// 4. Создайте тип для User | Admin и напишите функцию, которая возвращает роль.
type roles1 = 'User' | 'Admin'

function getRoles(val: roles1): string {
	switch (val) {
		case 'User':
			return 'I am a user'
		case 'Admin':
			return 'I am a admin'
		default:
			throw new Error('Unknown user type')
	}
}

// 5. Напишите функцию, которая принимает string | boolean и возвращает строку.
function getString(val: string | boolean): string {
	if (typeof val === 'string') {
		return val
	} else {
		throw new Error('Unknown string type')
	}
}

// 6. Реализуйте массив с элементами типа number | string.
type StringNumberArray = (string | number)[]
const arr10: StringNumberArray = [7, 'Artur', 30, 'dddd']

// 7. Напишите функцию, которая принимает null | string и возвращает длину строки.
function getStringLength(val: null | string): number {
	if (typeof val === 'string') {
		return val.length
	} else {
		throw new Error('Unknown string type')
	}
}

// 8. Создайте объект, который может содержать поля id или name.
type Identity = { id: number } | { name: string }
type Identity1<T extends 'id' | 'name'> = T extends 'id'
	? { id: number }
	: { name: string }

// 9. Реализуйте функцию, которая принимает массив string | number и фильтрует числа.
function filterNumber(arr: (string | number)[]): number[] {
	const arrNumber = arr.filter((el): el is number => typeof el === 'number')
	if (arrNumber.length > 0) {
		return arrNumber
	} else {
		throw new Error('Unknown array number type')
	}
}

filterNumber([7, 8, 'Artur', 4])
//10. Напишите функцию, которая принимает объект с полями age или isAdmin.
type User5 = { age: number } | { isAdmin: boolean }

function checkUser(user: User5): void {
	if ('age' in user) {
		console.log(`Возраст пользователя: ${user.age}`)
	} else {
		console.log(`Администратор: ${user.isAdmin ? 'Да' : 'Нет'}`)
	}
}

const userA: User5 = { age: 30 }
const userB: User5 = { isAdmin: true }

checkUser(userA)
checkUser(userB)
