/*
Интерфейсы
1.  Создай интерфейс для описания пользователя с полями id, name, и email.
2.  Добавь необязательное поле age в интерфейс пользователя.
3.  Создай интерфейс для описания товара с ценой, названием и флагом наличия.
4.  Напиши функцию, которая принимает объект пользователя и выводит его name.
5.  Расширь интерфейс пользователя, добавив поле isAdmin.
6.  Создай интерфейс для описания автомобиля с маркой, моделью и годом выпуска.
7.  Напиши функцию, которая принимает объект товара и возвращает его цену с учётом налога.
8.  Создай интерфейс для описания книги с автором, названием и количеством страниц.
9.  Используй интерфейсы для описания связей между пользователями (например, друзья).
10. Напиши функцию, которая принимает массив объектов с интерфейсом и возвращает отфильтрованный результат.
*/

// 1. Создай интерфейс для описания пользователя с полями id, name, и email.
interface userInterface {
	id: number
	name: string
	email: string
}

// 2. Добавь необязательное поле age в интерфейс пользователя.
interface userTwoInterface {
	id: number
	name: string
	email: string
	age?: number
}

// 3. Создай интерфейс для описания товара с ценой, названием и флагом наличия.
interface productInterface {
	description: string
	price: number
	productName: string
	inStock: boolean
}

// 4. Напиши функцию, которая принимает объект пользователя и выводит его name.
const user: userTwoInterface = {
	id: 10,
	name: 'Artur',
	email: 'dddd@ddd.com',
	// age:30
}

function userName(obj: userTwoInterface): void {
	console.log('exercise-8 (obj.name ) ' + obj.name)
}

userName(user)

// 5. Расширь интерфейс пользователя, добавив поле isAdmin.
interface userWithAdministrator extends userTwoInterface {
	isAdmin: boolean
}

// 6. Создай интерфейс для описания автомобиля с маркой, моделью и годом выпуска.
interface car {
	brand: string
	model: string
	yearManufacture: number
}

// 7. Напиши функцию, которая принимает объект товара и возвращает его цену с учётом налога.
const product: productInterface = {
	description:
		"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
	price: 1500,
	productName: 'banana',
	inStock: true,
}

function priceWithTaxes(obj: productInterface): number {
	return obj.price + (obj.price * 30) / 100
}

console.log('exercise-8 (obj.withTaxes ) ' + priceWithTaxes(product))

// 8. Создай интерфейс для описания книги с автором, названием и количеством страниц.
interface bookInterface {
	description: string
	Author: string
	bookTitle: string
	quantityPages: number
}

// 9. Используй интерфейсы для описания связей между пользователями (например, друзья).
interface userTreeInterface {
	name: string
	surname: string
	age: number
	city: string
	friends: userTreeInterface
}

// 10. Напиши функцию, которая принимает массив объектов с интерфейсом и возвращает отфильтрованный результат.
interface peopleInterface {
	name: string
	surname: string
	age: number
	city: string
}

const people: peopleInterface[] = [
	{ name: 'Artur', surname: 'Safaryan', age: 30, city: 'Yerevan' },
	{ name: 'Maria', surname: 'Ivanova', age: 25, city: 'Moscow' },
	{ name: 'David', surname: 'Hakobyan', age: 35, city: 'Gyumri' },
	{ name: 'Anna', surname: 'Karapetyan', age: 28, city: 'Vanadzor' },
	{ name: 'Karen', surname: 'Mkrtchyan', age: 40, city: 'Hrazdan' },
	{ name: 'Lilit', surname: 'Melkonyan', age: 23, city: 'Abovyan' },
	{ name: 'Arman', surname: 'Avetisyan', age: 27, city: 'Yerevan' },
	{ name: 'Sona', surname: 'Ghazaryan', age: 29, city: 'Stepanakert' },
	{ name: 'Hayk', surname: 'Petrosyan', age: 32, city: 'Kapan' },
	{ name: 'Narine', surname: 'Harutyunyan', age: 26, city: 'Gavar' },
]

function peopleFilter(arr: peopleInterface[]): peopleInterface[] {
	const newArray = arr.filter(el => el.age < 30)
	return newArray
}

console.log(peopleFilter(people))
