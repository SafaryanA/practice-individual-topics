/* 
///////////         1. Задачи с использованием функций-конструкторов   ///////////////



1.  Создай функцию-конструктор Car, добавь свойства brand и model. В Car.prototype добавь метод getInfo(), 

						 который возвращает строку "Brand: brand, Model: model".
2.  Создай конструктор User, добавь свойства name и age. Добавь метод sayHello(), который выводит "Hello, my name is name".
3.  Напиши конструктор Rectangle с width и height. Добавь метод getArea(), который возвращает площадь.
4.  Создай Person с name и age, добавь getAge(), который возвращает возраст.
5.  Создай Product с name и price, добавь getDiscountedPrice(discount), который возвращает цену с учетом скидки.
6.  Напиши BankAccount с balance, метод deposit(amount), который увеличивает баланс, и withdraw(amount), который уменьшает.
7.  Сделай Animal с name и species, добавь makeSound(), который выводит "Some sound".
8.  Создай Employee с name, position и методом getPosition(), который возвращает должность.
9.  Сделай Book с title и author, добавь toString(), который возвращает Book: title by author.
10. Создай Clock с методом showTime(), который выводит текущее время.
 */

/* 
 ////////////////////   2. Задачи с использованием объектов и Object.create()        //////////////////////////



1.  Создай объект animal с makeSound(), создай dog, унаследованный от animal, и вызови makeSound().
2.  Создай объект person с greet(), унаследуй student, который добавляет study().
3.  Сделай vehicle с move(), унаследуй bike, который добавляет ride().
4.  Создай device с turnOn(), унаследуй phone, который добавляет call().
5.  Сделай account с balance, унаследуй savingsAccount, который добавляет addInterest().
6.  Создай animal с name, унаследуй cat, добавь meow().
7.  Напиши company с name, унаследуй techCompany, добавь developSoftware().
8.  Создай person с sayHello(), унаследуй customer, добавь buy().
9.  Напиши store с addProduct(), унаследуй onlineStore, добавь checkout().
10. Сделай transport с speed, унаследуй plane, добавь fly()
*/

/* 
////////////////////  3. Задачи с использованием глобального объекта (Object.prototype)    ///////////////////




1.  Добавь Object.prototype.describe(), который выводит Это объект.
2.  Добавь Object.prototype.toJSON(), который превращает объект в JSON-строку.
3.  Добавь Object.prototype.getKeys(), который возвращает массив ключей.
4.  Сделай Object.prototype.getValues(), который возвращает массив значений.
5.  Напиши Object.prototype.clone(), который возвращает копию объекта.
6.  Создай Object.prototype.extend(obj), который копирует свойства из obj в текущий объект.
7.  Добавь Object.prototype.isEmpty(), который возвращает true, если объект пуст.
8.  Реализуй Object.prototype.merge(obj), который объединяет свойства obj с текущим объектом.
9.  Добавь Object.prototype.contains(key), который проверяет, есть ли у объекта ключ key.
10. Напиши Object.prototype.log(), который выводит объект в консоль.
*/

///////////////////////////////////////////////////////////////////////////////////////

// 1.  Создай функцию-конструктор Car, добавь свойства brand и model. В Car.prototype добавь метод getInfo(),
//  который возвращает строку "Brand: brand, Model: model".

function Car(brand, model) {
	this.brand = brand
	this.model = model
}
Car.prototype.getInfo = function () {
	return `Brand:${this.brand}, Model:${this.model}`
}
const myCar = new Car('Nissan', 'Altima')
console.log(myCar)
console.log(myCar.getInfo())
// 2.  Создай конструктор User, добавь свойства name и age. Добавь метод sayHello(), который выводит "Hello, my name is name".
function User(name, age) {
	;(this.name = name), (this.age = age)
}
User.prototype.sayHello = function () {
	console.log(`Hello, my name is ${this.name}`)
}

const myName = new User('Artur', 30)
console.log(myName)
console.log(myName.sayHello())
// 3.  Напиши конструктор Rectangle с width и height. Добавь метод getArea(), который возвращает площадь.
function Rectangle(width, height) {
	;(this.width = width), (this.height = height)
}
Rectangle.prototype.getArea = function () {
	return this.width * this.height
}
const myHouse = new Rectangle(20, 10)
console.log(myHouse)
console.log(myHouse.getArea())
// 4.  Создай Person с name и age, добавь getAge(), который возвращает возраст.
function Person(name, age) {
	;(this.name = name), (this.age = age)
}
Person.prototype.getAge = function () {
	return this.age
}
const myPerson = new Person('Artur', 30)
console.log(myPerson)
console.log(myPerson.getAge())
// 5.  Создай Product с name и price, добавь getDiscountedPrice(discount), который возвращает цену с учетом скидки.
function Product(name, price) {
	;(this.name = name), (this.price = price)
}
Product.prototype.getDiscountedPrice = function (discount) {
	return this.price - (this.price * discount) / 100
}
const myProduct = new Product('Apple', 450)
console.log(myProduct)
console.log(myProduct.getDiscountedPrice(20))
// 6.  Напиши BankAccount с balance, метод deposit(amount), который увеличивает баланс, и withdraw(amount), который уменьшает.
function BankAccount(balance) {
	this.balance = balance
}
BankAccount.prototype.deposit = function (amount) {
	this.balance += amount
	console.log(`Deposited: ${amount}, New Balance: ${this.balance}`)
}
BankAccount.prototype.withdraw = function (amount) {
	if (amount > this.balance) {
		console.log('Insufficient funds!')
		return
	}
	this.balance -= amount
	console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`)
}
const myBankAccount = new BankAccount(45000)
console.log(myBankAccount)
myBankAccount.deposit(400)
myBankAccount.withdraw(9000)
// 7.  Сделай Animal с name и species, добавь makeSound(), который выводит "Some sound".
function Animal(name, species) {
	;(this.name = name), (this.species = species)
}
Animal.prototype.makeSound = function () {
	console.log('Some sound')
}
const myAnimal = new Animal('Dog', 'Gaf-gaf')
myAnimal.makeSound()
// 8.  Создай Employee с name, position и методом getPosition(), который возвращает должность.
function Employee(name, position) {
	;(this.name = name), (this.position = position)
}
Employee.prototype.getPosition = function () {
	return `Position: ${this.position}`
}
const myEmployee = new Employee('Artur', 'middle programmer')
console.log(myEmployee)
console.log(myEmployee.getPosition())
// 9.  Сделай Book с title и author, добавь toString(), который возвращает Book: title by author.
function Book(title, author) {
	;(this.title = title), (this.author = author)
}
Book.prototype.toString = function () {
	return ` Book: ${this.title} by ${this.author}`
}
const myBook = new Book('Harry Potter', 'Joanne Rowling')
console.log(myBook)
console.log(myBook.toString())
// 10. Создай Clock с методом showTime(), который выводит текущее время.
function Clock() {}
Clock.prototype.showTime = function () {
	console.log(new Date().toLocaleTimeString('ru-RU'))
}
const myClock = new Clock()
cmyClock.showTime()

//Задачи с использованием объектов и Object.create()

// 1.  Создай объект animal с makeSound(), создай dog, унаследованный от animal, и вызови makeSound().
const animal = {
	makeSound: function () {
		console.log('Some generic animal sound')
	},
}
const dog = Object.create(animal)
dog.makeSound = function () {
	console.log('gaf-gaf')
}
dog.makeSound()

// 2.  Создай объект person с greet(), унаследуй student, который добавляет study().
const person = {
	greet: function () {
		console.log('hello')
	},
}
const student = Object.create(person)
student.study = function () {
	console.log("I'm studying!")
}
student.greet()
student.study()
// 3.  Сделай vehicle с move(), унаследуй bike, который добавляет ride().
const vehicle = {
	move: function () {
		console.log(1)
	},
}
const bike = Object.create(vehicle)
bike.ride = function () {
	console.log(2)
}
bike.move()
bike.ride()
// 4.  Создай device с turnOn(), унаследуй phone, который добавляет call().
const device = {
	turnOn: function () {
		console.log('turnOn')
	},
}
const phone = Object.create(device)
phone.call = function () {
	console.log('call')
}
phone.turnOn()
phone.call()
// 5.  Сделай account с balance, унаследуй savingsAccount, который добавляет addInterest().
const account = {
	balance: 4500,
}
const savingsAccount = Object.create(account)
savingsAccount.addInterest = function () {
	console.log('addInterest')
}
savingsAccount.balance
savingsAccount.addInterest()
// 6.  Создай animal с name, унаследуй cat, добавь meow().
const animalOne = {
	name: 'Unknown',
}
const cat = Object.create(animalOne)
cat.meow = function () {
	console.log('meow')
}
cat.name = 'joi'
console.log(cat.name)
cat.meow()
// 7.  Напиши company с name, унаследуй techCompany, добавь developSoftware().
const company = {
	name: 'company',
}
const techCompany = Object.create(company)
techCompany.developSoftware = function () {
	console.log('JavaScript')
}
techCompany.name = 'Rockstar Games'
console.log(techCompany.name)
techCompany.developSoftware()
// 8.  Создай person с sayHello(), унаследуй customer, добавь buy().
const personOne = {
	sayHello: function () {
		console.log('Hello')
	},
}
const customer = Object.create(personOne)
customer.buy = function () {
	console.log('I don’t buy anything')
}
// 9.  Напиши store с addProduct(), унаследуй onlineStore, добавь checkout().
const store = {
	addProduct: function () {
		console.log('product')
	},
}

const onlineStore = Object.create(store)
onlineStore.checkout = function () {
	console.log('checked')
}
onlineStore.checkout()
onlineStore.addProduct()
// 10. Сделай transport с speed, унаследуй plane, добавь fly()

const transport = {
	speed: 85,
}
const plane = Object.create(transport)
place.fly = function () {
	console.log('fly')
}
plane.speed = 75
console.log(place.speed)
plane.fly()

// Задачи с использованием глобального объекта (Object.prototype)

// 1.  Добавь Object.prototype.describe(), который выводит Это объект.
Object.prototype.describe = function () {
	console.log(`Это объект`)
}
// 2.  Добавь Object.prototype.toJSON(), который превращает объект в JSON-строку.
Object.prototype.toJSON = function () {
	return JSON.stringify(this)
}

// 3.  Добавь Object.prototype.getKeys(), который возвращает массив ключей.
Object.prototype.getKeys = function () {
	return Object.keys(this)
}
// 4.  Сделай Object.prototype.getValues(), который возвращает массив значений.
Object.prototype.getValues = function () {
	return Object.values(this)
}
// 5.  Напиши Object.prototype.clone(), который возвращает копию объекта.
Object.prototype.clone = function () {
	return Object.assign({}, this)
}
// 6.  Создай Object.prototype.extend(obj), который копирует свойства из obj в текущий объект.
Object.prototype.extend = function (obj) {
	return Object.assign(this, obj)
}
// 7.  Добавь Object.prototype.isEmpty(), который возвращает true, если объект пуст.
Object.prototype.isEmpty = function () {
	return Object.keys(this).length === 0
}
// 8.  Реализуй Object.prototype.merge(obj), который объединяет свойства obj с текущим объектом.
Object.prototype.merge = function (obj) {
	return Object.assign(this, obj)
}
// 9.  Добавь Object.prototype.contains(key), который проверяет, есть ли у объекта ключ key.
Object.prototype.contains = function (key) {
	return Object.keys(this).includes(key)
}
// 10. Напиши Object.prototype.log(), который выводит объект в консоль.
Object.prototype.log = function () {
	console.log(this)
}

const myObject = {}
console.log(myObject)
const user = {
	name: 'Artur',
	age: 30,
	city: 'New York',
}
//Todo problematic enters infinite loop
// console.log(user.toJSON()) // problematic enters infinite loop
console.log(user.getKeys())
console.log(user.getValues())
console.log(user.clone())
console.log(user.extend({ name: 'Lol', age: 50, city: 'Las Vegas' }))
console.log(user.isEmpty())
console.log(user.merge({ name: 'Lol', age: 50, city: 'Las Vegas' }))
console.log(user.contains('name'))
user.log()
