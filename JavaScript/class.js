/*
Лёгкие (10 шт.)
1.  Создать класс Car с полями brand и year, добавить метод getInfo(), который возвращает строку с информацией.
2.  Создать класс Rectangle, у которого есть width и height, метод getArea() для вычисления площади.
3.  Написать класс Person, принимающий name и age, метод introduce() выводит приветствие.
4.  Сделать класс Counter, у которого есть метод increment(), увеличивающий счётчик на 1.
4.  Сделать класс Counter, у которого есть метод increment(), увеличивающий счётчик на 1.
4.  Сделать класс Counter, у которого есть метод increment(), увеличивающий счётчик на 1.
5.  Создать класс Book с полями title, author, pages, и методом getSummary(), возвращающим информацию о книге.
6.  Реализовать класс Student с полем grade и методом getGrade().
7.  Создать класс Animal, который имеет name и sound, добавить метод makeSound(), который выводит звук.
8.  Сделать класс Circle, у которого есть radius, метод getCircumference() считает длину окружности.
9.  Создать класс BankAccount с балансом, метод deposit(amount) увеличивает баланс.
10. Реализовать класс Clock, который выводит текущее время при вызове showTime().

*/

/*
Средние (10 шт.)
1.  Добавить приватные поля (через #) в BankAccount, скрыв balance.
2.  Реализовать класс User с геттером fullName(), объединяющим firstName и lastName.
3.  Добавить сеттер setAge() в Person, который не позволит установить возраст < 0.
4.  Сделать класс Triangle, который проверяет, можно ли создать треугольник с указанными сторонами.
5.  Добавить метод withdraw(amount) в BankAccount, чтобы нельзя было снять больше, чем есть.
6.  Сделать класс Temperature, где celsius и fahrenheit связаны геттерами и сеттерами.
7.  Реализовать класс Movie, у которого есть рейтинг (1-10), если выставить вне диапазона, должно выбрасываться исключение.
8.  Добавить статический метод fromObject(obj) в User, который создаёт объект из JSON.
9.  Сделать класс Queue, поддерживающий методы enqueue(), dequeue() и size().
10. Создать класс Logger, который хранит историю вызовов log().
*/
/*
🔹 Трудные (10 шт.)
1.  Реализовать класс TodoList, который хранит задачи и умеет их добавлять, удалять и показывать.
2.  Написать класс SmartLamp, который может включаться/выключаться и менять яркость.
3.  Создать класс Robot, который имеет x, y и умеет двигаться (move(direction)).
4.  Реализовать класс Deck, который создаёт колоду карт, тасует и раздаёт карты.
5.  Написать класс FileManager, который может читать и записывать текст в файлы.
6.  Сделать класс WeatherAPI, который получает погоду по городу (используя fetch).
7.  Реализовать ShoppingCart, который может добавлять товары, считать сумму, удалять их.
8.  Написать EventEmitter, который поддерживает on(), emit() и off().
9.  Создать класс ChatRoom, где пользователи могут отправлять и получать сообщения.
10. Сделать класс SecureVault, который шифрует данные при сохранении и дешифрует при чтении.
*/
/*
🔹 Очень трудные (10 шт.)
1.  Создать игру "Змейка" на классах.
2.  Написать VirtualDOM, который следит за изменениями HTML-структуры.
3.  Реализовать Promise, аналогичный встроенному.
4.  Создать класс Blockchain, который управляет цепочкой блоков.
5.  Реализовать WebSocketChat, где пользователи могут общаться.
6.  Написать систему прав доступа (RoleBasedAccessControl).
7.  Реализовать AIPlayer для крестиков-ноликов.
8.  Создать JobScheduler, который выполняет задачи с задержкой.
9.  Написать CustomRouter, который управляет страницами без перезагрузки.
10. Реализовать DistributedQueue, работающую между разными вкладками браузера.
*/



// 1.  Создать класс Car с полями brand и year, добавить метод getInfo(), который возвращает строку с информацией.
class Car {
	constructor(brand, year) {
		this.brand = brand
		this.year = year
	}
	getInfo() {
		return `это машина ${this.brand} и его произведённая в ${this.year}`
	}
}
const carMazda = new Car('Mazda', 2025)
console.log(carMazda)
console.log(carMazda.getInfo())

// 2.  Создать класс Rectangle, у которого есть width и height, метод getArea() для вычисления площади.
class Rectangle {
	constructor(width, height) {
		this.width = width
		this.height = height
	}
	getArea() {
		return this.width * this.height
	}
}
const rectangle = new Rectangle(700, 820)
console.log(rectangle)
console.log(rectangle.getArea())
// 3.  Написать класс Person, принимающий name и age, метод introduce() выводит приветствие.
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	introduce() {
		return `Привет меня зовут ${this.name} и мне ${this.age} лет`
	}
}

const person = new Person('Artur', 30)
console.log(person)
console.log(person.introduce())
// 4.  Сделать класс Counter, у которого есть метод increment(), увеличивающий счётчик на 1.
class Counter {
	constructor() {
		this.count = 0
	}
	increment() {
		this.count += 1
		return this.count
	}
}
const counter = new Counter()
console.log(counter.count)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
// 5.  Создать класс Book с полями title, author, pages, и методом getSummary(), возвращающим информацию о книге.
class Book {
	constructor(title, author, pages) {
		this.title = title
		this.author = author
		this.pages = pages
	}
	getSummary() {
		return `Книга "${this.title}" написана ${this.author}, содержит ${this.pages} страниц.`
	}
}
const book = new Book('Кавказский пленник', 'Александр Сергеевич Пушкин', 23)
console.log(book)
console.log(book.getSummary())
// 6.  Реализовать класс Student с полем grade и методом getGrade().
class Student {
	constructor(grade) {
		this.grade = grade
	}
	getGrade() {
		return `Ты получаешь ${this.grade}`
	}
}
const student = new Student(12)
console.log(student)
console.log(student.grade)
console.log(student.getGrade())
// 7.  Создать класс Animal, который имеет name и sound, добавить метод makeSound(), который выводит звук.
class Animal {
	constructor(name, sound) {
		this.name = name
		this.sound = sound
	}

	makeSound() {
		console.log(`${this.name} издает звук: ${this.sound}`)
	}
}

const animalDog = new Animal('Собака', 'Гав-гав')
animalDog.makeSound()

// 8.  Сделать класс Circle, у которого есть radius, метод getCircumference() считает длину окружности.

class Circle {
	constructor(radius) {
		this.radius = radius
	}
	getCircumference() {
		return 2 * +Math.PI.toFixed(2) * this.radius
	}
}
const circle = new Circle(7)
console.log(circle)
console.log(circle.radius)
console.log(circle.getCircumference())
// 9.  Создать класс BankAccount с балансом, метод deposit(amount) увеличивает баланс.
class BankAccount {
	constructor() {
		this.balance = 1500
	}
	deposit(amount) {
		this.balance += amount
		return `Ваш баланс: ${this.balance}`
	}
}
const bankAccount = new BankAccount()
console.log(bankAccount)
console.log(bankAccount.deposit(15000))
// 10. Реализовать класс Clock, который выводит текущее время при вызове showTime().
class Clock {
	showTime() {
		return new Date().toLocaleTimeString() // Теперь всегда текущее время
	}
}

const clock = new Clock()
console.log(clock.showTime())

 

// 1.  Добавить приватные поля (через #) в BankAccount, скрыв balance.
 class BankAccount {
	#balance
	constructor() {
		this.#balance = 15000
	}
	deposit(amount) {
		this.#balance += amount
		return this.#balance
	}
}
const bankAccountAmanda = new BankAccount()
console.log(bankAccountAmanda)
console.log(bankAccountAmanda.deposit)
console.log(bankAccountAmanda.deposit(2500))
 
// 2.  Реализовать класс User с геттером fullName(), объединяющим firstName и lastName.
 class User {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
	get fullName() {
		return `Я ${this.firstName} ${this.lastName}`
	}
}
const userOne = new User('Artur', 'Safaryan')
console.log(user)
console.log(userOne.firstName)
console.log(userOne.lastName)
console.log(userOne.fullName) 

// 3.  Добавить сеттер setAge() в Person, который не позволит установить возраст < 0.
class Person {
	#age
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	set age(val) {
		if (val < 0) {
			console.error('Возраст не может быть отрицательным!')
			return
		}
		this.#age = val
	}
	get age() {
		return this.#age
	}
}

const personOne = new Person('Артур', 30)
console.log(personOne.age)

person.age = -5
console.log(personOne.age)

person.age = 25
console.log(personOne.age)

// 4.  Сделать класс Triangle, который проверяет, можно ли создать треугольник с указанными сторонами.
class Triangle {
	constructor(first, second, third) {
		this.first = first
		this.second = second
		this.third = third
	}
	get coordinateCheck() {
		if (this.first > 0 && this.second > 0 && this.third > 0) return true
		return false
	}
}
const triangle = new Triangle(7, 8, 10)
console.log(triangle)
console.log(triangle.coordinateCheck)
const triangleOne = new Triangle(0, 8, 10)
console.log(triangleOne)
console.log(triangleOne.coordinateCheck)
// 5.  Добавить метод withdraw(amount) в BankAccount, чтобы нельзя было снять больше, чем есть.

// 6.  Сделать класс Temperature, где celsius и fahrenheit связаны геттерами и сеттерами.
class Temperature {
	constructor(celsius) {
		this._celsius = celsius
	}
	get celsius() {
		return this._celsius
	}
	set celsius(value) {
		if (typeof value !== 'number') {
			throw new Error('Температура должна быть числом')
		}
		this._celsius = value
		console.log(
			value > 0
				? `Температура поднимается: ${value}°C`
				: value < 0
				? `Температура падает: ${value}°C`
				: `Температура стабильна: ${value}°C`
		)
	}
	get fahrenheit() {
		return this._celsius * 1.8 + 32
	}
	set fahrenheit(value) {
		if (typeof value !== 'number') {
			throw new Error('Температура должна быть числом')
		}
		this._celsius = (value - 32) / 1.8
	}
}

const temp = new Temperature(25)
console.log(temp.celsius)
console.log(temp.fahrenheit)

temp.fahrenheit = 32
console.log(temp.celsius)

temp.celsius = -10
console.log(temp.fahrenheit)
// 7.  Реализовать класс Movie, у которого есть рейтинг (1-10), если выставить вне 	, должно выбрасываться исключение.
class Movie {
	#minRating
	#maxRating
	#rating
	constructor(rating) {
		this.#minRating = 1
		this.#maxRating = 10
		this.rating = rating
	}
	set rating(value) {
		if (value >= this.#minRating && value <= this.#maxRating) {
			this.#rating = value
		} else {
			throw new Error(
				`Число ${value} вне диапазона ${this.#minRating}-${this.#maxRating}`
			)
		}
	}
	get rating() {
		return this.#rating
	}
}
const movie = new Movie(5)
console.log(movie.rating)
// 8.  Добавить статический метод fromObject(obj) в User, который создаёт объект из JSON.

class User {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
	get fullName() {
		return `Я ${this.firstName} ${this.lastName}`
	}
	static fromObject(obj) {
		return new User(obj.firstName, obj.lastName)
	}
}
const user = User.fromObject({ firstName: 'Artur', lastName: 'Safaryan' })
console.log(user)
console.log(user.firstName)
console.log(user.lastName)
console.log(user.fullName)
// 9.  Сделать класс Queue, поддерживающий методы enqueue(), dequeue() и size().
class Queue {
	constructor() {
		this.items = []
	}
	enqueue(item) {
		this.items.push(item)
	}
	dequeue() {
		if (this.isEmpty()) {
			throw new Error('Очередь пуста!')
		}
		return this.items.shift()
	}
	size() {
		return this.items.length
	}
	isEmpty() {
		return this.items.length === 0
	}
}
// 10. Создать класс Logger, который хранит историю вызовов log().
class Logger {
	constructor() {
		this.logs = []
	}

	log(value) {
		const timestamp = new Date().toISOString()
		this.logs.push({ timestamp, message: value })
	}

	getHistory() {
		return this.logs
	}

	clear() {
		this.logs = []
	}
}

const logger = new Logger()

logger.log('Программа запущена')
logger.log('Ошибка соединения')
logger.log('Перезапуск системы')

console.log(logger.getHistory())
logger.clear()
console.log(logger.getHistory())

// 1.  Реализовать класс TodoList, который хранит задачи и умеет их добавлять, удалять и показывать.
class TodoList {
	constructor() {
		this.lists = []
	}
	addPosts(val) {
		this.lists.push(val)
		console.log()
	}
	removeTask(index) {
		if (index < 0 || index > this.lists.length) {
			console.log('Некорректный индекс задачи.')
			return
		}
		const removed = this.lists.splice(index, 1)
		console.log(`Задача "${removed}" удалена.`)
	}
	showTasks() {
		if (this.lists.length === 0) {
			console.log('Список задач пуст.')
			return
		}
		this.lists.forEach((task, index) => console.log(`${index + 1}. ${task}`))
	}
}

const todo = new TodoList()
todo.addPosts('Купить молоко')
todo.addPosts('Сделать домашку')
todo.showTasks()
todo.removeTask(0)
todo.showTasks()
// 2.  Написать класс SmartLamp, который может включаться/выключаться и менять яркость.

class SmartLamp {
	constructor() {
		this.lampOn = true
		this.brightness = 100
	}
	lampToggle() {
		return (this.lampOn = !this.lampOn)
	}
	lampBrightness(val) {
		if (val > 100 || val < 0) {
			console.error('Ошибка: яркость должна быть в диапазоне 0-100!')
			return
		}
		this.brightness = val
		console.log(`Яркость установлена на ${this.brightness}%`)
		return this.brightness
	}
}
const lamp = new SmartLamp()
console.log(lamp.lampToggle())
console.log(lamp.lampBrightness(20))
console.log(lamp.lampToggle())
console.log(lamp.lampBrightness(40))
// 3.  Создать класс Robot, который имеет x, y и умеет двигаться (move(direction)).
class Robot {
	constructor() {
		this.x = 100
		this.y = 100
	}
	move(direction) {
		switch (direction) {
			case 'up':
				this.y += 1
				break
			case 'down':
				this.y -= 1
				break
			case 'left':
				this.x -= 1
				break
			case 'right':
				this.x += 1
				break
			default:
				console.error('Ошибка: неизвестное направление!')
				return
		}
	}
	getPosition() {
		return { x: this.x, y: this.y }
	}
}
const robot = new Robot()
robot.move('up')
robot.move('right')
robot.move('down')
robot.move('left')
console.log(robot.getPosition())
robot.move('jump')

// 4.  Реализовать класс Deck, который создаёт колоду карт, тасует и раздаёт карты.
// 5.  Написать класс FileManager, который может читать и записывать текст в файлы.
// 6.  Сделать класс WeatherAPI, который получает погоду по городу (используя fetch).
// 7.  Реализовать ShoppingCart, который может добавлять товары, считать сумму, удалять их.
// 8.  Написать EventEmitter, который поддерживает on(), emit() и off().
// 9.  Создать класс ChatRoom, где пользователи могут отправлять и получать сообщения.
// 10. Сделать класс SecureVault, который шифрует данные при сохранении и дешифрует при чтении.
