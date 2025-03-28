/* 
1.  Создайте класс Person с полями name, age и методом greet().
2.  Реализуйте класс BankAccount с deposit() и withdraw().
3.  Создайте класс Rectangle с методами getArea() и getPerimeter().
4.  Напишите класс Employee, расширяющий Person, с зарплатой.
5.  Реализуйте класс Library, хранящий список книг.
6.  Создайте Movie, содержащий информацию о фильме.
7.  Реализуйте класс Student с методом getGrade().
8.  Напишите класс Product, содержащий цену и метод getDiscountedPrice().
9.  Создайте Animal, а затем Dog, Cat, наследующие его.
10. Напишите Vehicle и создайте подклассы Bike, Car.
 */

// 1.  Создайте класс Person с полями name, age и методом greet().
class Person {
	name: string
	age: number

	constructor(name: string, age: number) {
		this.name = name,
		this.age = age
	}
	greet(): string {
		return `My name is ${this.name}, I am ${this.age} years old.`
	}
}
// 2.  Реализуйте класс BankAccount с deposit() и withdraw().
class BankAccount {
	balance: number
	constructor() {
		this.balance = 4500
	}
	deposit(value: number): number {
		this.balance += value
		return this.balance
	}
	withdraw(value: number): number | string {
		if (this.balance - value >= 0) {
			this.balance -= value
			return this.balance
		}
		return `insufficient funds`
	}
}
const bankAccountAm = new BankAccount()
console.log(bankAccountAm.withdraw(2000))
console.log(bankAccountAm.withdraw(45000))

// 3.  Создайте класс Rectangle с методами getArea() и getPerimeter().

class Rectangle {
	width : number
	height: number
	constructor(width : number, height: number) {
	this.width  = width , this.height = height
	}
	getArea(): number {
		return this.width  * this.height
	}

	getPerimeter() {
		return 2 * (this.width  + this.height)
	}
}
// 4.  Напишите класс Employee, расширяющий Person, с зарплатой.
class Employee extends Person{
	wages:number
	constructor(name:string, age:number, wages:number){
		super(name, age)
		this.wages=wages
	}
}
// 5.  Реализуйте класс Library, хранящий список книг.
class Library{
	listBook:string[]
	constructor(){
		this.listBook=["Война и мир", "1984", "Лолита"]
	}
	addBook(val:string):string[]{
		this.listBook.push(val)
return this.listBook
	}
}
const listBook=new Library
listBook.addBook("Звук и ярость")
console.log(listBook);

// 6.  Создайте Movie, содержащий информацию о фильме.
interface Films{
	title:string,
	genre:string[],
	status:string,
	translation:string,
	channel:string,
	releaseDate:number,
	country:string,
	director:string[],
	Actors:string[],
	durationFilm:string

}
class Movie{
	films:Films[]
	constructor(){
		this.films=[
			{
				title:"Мэйфейрские ведьмы",
				genre:["Сериал","Драма","Ужасы","Фэнтези"],
				status:"Идет показ",
				translation: "Многоголосый",
				channel:"AMC",
				releaseDate: 2023,
				country:"США",
				director:["Логан Кибенс", "Хайфа Аль-Мансур", "Аксель Кэролин"],
				Actors:["Александра Даддарио", "Тонгай Арнольд Чириса", "Джек Хьюстон", "Гарри Хэмлин", "Бен Фельдман", "Алисса Джиррелс", "Ханна Калуэлл", "Джеральдин Сингер", "Деннис Буцикарис", "Олив Элиз Аберкромби"],
				durationFilm:"1-45 S"
			},
			{
				"title": "Дом дракона",
				"genre": ["Сериал", "Фэнтези", "Драма", "Приключения"],
				"status": "Идет показ",
				"translation": "Профессиональный",
				"channel": "HBO",
				"releaseDate": 2022,
				"country": "США",
				"director": ["Мигель Сапочник", "Грег Яйтанс", "Клер Килнер"],
				"Actors": ["Пэдди Консидайн", "Мэтт Смит", "Оливия Кук", "Эмма Д’Арси", "Рис Иванс"],
				"durationFilm": "1-60 S"
			},
			{
				"title": "Очень странные дела",
				"genre": ["Сериал", "Фантастика", "Детектив", "Триллер"],
				"status": "Идет показ",
				"translation": "Дубляж",
				"channel": "Netflix",
				"releaseDate": 2016,
				"country": "США",
				"director": ["Мэтт Даффер", "Росс Даффер"],
				"Actors": ["Вайнона Райдер", "Дэвид Харбор", "Финн Вулфхард", "Милли Бобби Браун", "Гейтен Матараццо"],
				"durationFilm": "1-50 S"
			},
			{
				"title": "Мандалорец",
				"genre": ["Сериал", "Фантастика", "Боевик", "Приключения"],
				"status": "Завершен",
				"translation": "Профессиональный",
				"channel": "Disney+",
				"releaseDate": 2019,
				"country": "США",
				"director": ["Джон Фавро", "Дэйв Филони", "Рик Фамуйива"],
				"Actors": ["Педро Паскаль", "Джина Карано", "Карл Уэзерс", "Вернер Херцог", "Ник Нолти"],
				"durationFilm": "1-40 S"
			},
			{
				"title": "Ведьмак",
				"genre": ["Сериал", "Фэнтези", "Драма", "Приключения"],
				"status": "Идет показ",
				"translation": "Дубляж",
				"channel": "Netflix",
				"releaseDate": 2019,
				"country": "США, Польша, Венгрия",
				"director": ["Алик Сахаров", "Шарлотта Брэндстром", "Алекс Гарсия Лопес"],
				"Actors": ["Генри Кавилл", "Аня Чалотра", "Фрейя Аллан", "Джоэи Бэти", "Мими Ндивени"],
				"durationFilm": "1-55 S"
			}
		]
	}
}

const movies=new Movie
console.log(movies.films);

// 7.  Реализуйте класс Student с методом getGrade().
class Student{
	grade:number
	constructor(){
		this.grade=0
	}
	getGrade(val:number):number{
		return this.grade=val
	}

}
// 8.  Напишите класс Product, содержащий цену и метод getDiscountedPrice().
class Product{
	price:number
	constructor(){
		this.price=134
	}
	getDiscountedPrice(discount:number){
		const newPrice=(this.price*discount)/100
		console.log(`with a ${discount} percent discount it will be ${newPrice}`);
		
	}
}
// 9.  Создайте Animal, а затем Dog, Cat, наследующие его.

class AnimalOne{
	howManyPaws:number
	constructor(){
		this.howManyPaws=4
	}
}
class Dog extends AnimalOne{
	makesSounds:string
	constructor(howManyPaws:number){
		super()
		this.makesSounds="гаф гаф гаф"
	}
}
class Cat extends AnimalOne{
	makesSounds:string
	constructor(howManyPaws:number){
		super()
			this.makesSounds="мяу, мяу мяу"
	}
}
// 10. Напишите Vehicle и создайте подклассы Bike, Car.
class Vehicle{
	manyWheels:number
	constructor(manyWheels:number){
		this.manyWheels=manyWheels
	}
}

class Bike extends Vehicle{
	seats:number
	constructor(){
		super(2)
		this.seats=2
	}
}

class Car extends Vehicle{
	seats:number
	constructor(){
		super(4)
		this.seats=4
	}
}
