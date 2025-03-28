/*
Тип void
1.  Напиши функцию, которая выводит сообщение в консоль.
2.  Напиши функцию, которая записывает значение в локальное хранилище.
3.  Напиши функцию, которая изменяет глобальную переменную.
4.  Напиши функцию, которая принимает строку и ничего не возвращает.
5.  Напиши функцию, которая вызывает другую функцию, не возвращая значения.
6.  Напиши функцию, которая выводит длину строки в консоль.
7.  Напиши функцию, которая изменяет объект, переданный по ссылке.
8.  Напиши функцию, которая добавляет элемент в массив, не возвращая значения.
9.  Напиши функцию, которая отправляет HTTP-запрос без возвращаемого значения.
10. Напиши функцию, которая пишет лог ошибок в файл.
*/

// 1. Напиши функцию, которая выводит сообщение в консоль.
function messagesConsole(massages: string): void {
	console.log('exercise-1 ( ) ' + massages)
}
messagesConsole('Hello world')

// 2. Напиши функцию, которая записывает значение в локальное хранилище.
function recordLocalStorage(key: string, value: string): void {
	localStorage.setItem(key, value)
}
recordLocalStorage('myCat', 'Tom')
console.log(localStorage.getItem('myCat')) // "Tom"

// 3. Напиши функцию, которая изменяет глобальную переменную.
var num: number = 0
function globalVar(arg: any): void {
	num = 42 // Изменяем глобальную переменную
	console.log('exercise-3 () ' + num)
}
globalVar(num)

// 4. Напиши функцию, которая принимает строку и ничего не возвращает.
const surname: string = 'Safaryan'
function acceptString(str: string): void {
	console.log('exercise-4 ( ) ' + str)
}
acceptString(surname)

// 5. Напиши функцию, которая вызывает другую функцию, не возвращая значения.
const city: string = 'Yerevan'
function callsFunction(func: any, city: string): void {
	func(city)
}
callsFunction(acceptString, city)

// 6. Напиши функцию, которая выводит длину строки в консоль.
function stringLength(str: string): void {
	console.log('exercise-6 ( ) ' + str.length)
}
stringLength(city)

// 7. Напиши функцию, которая изменяет объект, переданный по ссылке.
const objv: { name: string; surname: string; age: number } = {
	name: 'Artur',
	surname: 'Safaryan',
	age: 45,
}

function newValue(obj: any): void {
	// obj.age:30;
	obj.age = 30
	console.log(obj)
	console.log('exercise-6 ( ) ' + obj)
}
newValue(objv)
// 8. Напиши функцию, которая добавляет элемент в массив, не возвращая значения.
function addFunction(obj: any, nameValue: string, value: string): void {
	obj.nameValue = value
	console.log(obj)
}
addFunction(objv, 'City', 'Yerevan')
// 9. Напиши функцию, которая отправляет HTTP-запрос без возвращаемого значения.

function httpRequest(requestURL: string): void {
	requestURL = 'https://jsonplaceholder.typicode.com/users'
	const xhr = new XMLHttpRequest()
	xhr.open('GET', requestURL)
	xhr.onload = () => {
		console.log(JSON.parse(xhr.response))
	}
	xhr.send()
}
httpRequest('https://jsonplaceholder.typicode.com/users')

async function httpRequestFetch(requestURL: string): Promise<void> {
	try {
		const response = await fetch(requestURL)
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.error('Request failed', error)
	}
}
httpRequest('https://jsonplaceholder.typicode.com/users')

// 10. Напиши функцию, которая пишет лог ошибок в файл.

// import fs from "fs";

// function logErrorToFile(errorMessage: string, filePath: string): void {
//     fs.appendFile(filePath, errorMessage + "\n", (err) => {
//         if (err) console.error("Error writing to file", err);
//     });
// }
// logErrorToFile("An error occurred", "error.log");
