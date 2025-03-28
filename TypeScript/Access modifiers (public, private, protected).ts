/* 
1.  Создайте Person с private полем age.
2.  Реализуйте Car с protected свойством fuelLevel.
3.  Напишите BankAccount с private balance.
4.  Сделайте Employee с protected salary.
5.  Создайте User, скрывающий password.
6.  Напишите Library, скрывающий внутренние данные.
7.  Реализуйте Product с private discount.
8.  Создайте Rectangle с protected свойствами width и height.
9.  Напишите Movie, хранящий private boxOfficeRevenue.
10. Создайте Vehicle с protected engineCapacity.
 */

// 1. Создайте Person с private полем age.
class Person {
	private age: number;
	constructor(age: number) {
			this.age = age;
	}

	getAge(): number {
			return this.age;
	}
}

// 2. Реализуйте Car с protected свойством fuelLevel.
class CarOne {
	protected fuelLevel: number;
	constructor(fuelLevel: number) {
			this.fuelLevel = fuelLevel;
	}

	getFuelLevel(): number {
			return this.fuelLevel;
	}
}

// 3. Напишите BankAccount с private balance.
class BankAccount {
	private balance: number;
	constructor(balance: number) {
			this.balance = balance;
	}

	getBalance(): number {
			return this.balance;
	}
}

// 4. Сделайте Employee с protected salary.
class EmployeeOne {
	protected salary: number;
	constructor(salary: number) {
			this.salary = salary;
	}

	getSalary(): number {
			return this.salary;
	}
}

// 5. Создайте User, скрывающий password.
class UserO {
	private password: string;
	constructor(password: string) {
			this.password = password;
	}

	checkPassword(pass: string): boolean {
			return this.password === pass;
	}
}

// 6. Напишите Library, скрывающий внутренние данные.
class Library {
	private books: string[];

	constructor() {
			this.books = [];
	}

	addBook(book: string): void {
			this.books.push(book);
	}

	getBooks(): string[] {
			return [...this.books];
	}
}

// 7. Реализуйте Product с private discount.
class Product {
	private discount: number;
	constructor(discount: number) {
			this.discount = discount;
	}

	getDiscount(): number {
			return this.discount;
	}
}

// 8. Создайте Rectangle с protected свойствами width и height.
class Rectangle {
	protected width: number;
	protected height: number;

	constructor(width: number, height: number) {
			this.width = width;
			this.height = height;
	}

	getArea(): number {
			return this.width * this.height;
	}
}

// 9. Напишите Movie, хранящий private boxOfficeRevenue.
class Movie {
	private boxOfficeRevenue: number;
	constructor(boxOfficeRevenue: number) {
			this.boxOfficeRevenue = boxOfficeRevenue;
	}

	getRevenue(): number {
			return this.boxOfficeRevenue;
	}
}

// 10. Создайте Vehicle с protected engineCapacity.
class VehicleOne {
	protected engineCapacity: number;
	constructor(engineCapacity: number) {
			this.engineCapacity = engineCapacity;
	}

	getEngineCapacity(): number {
			return this.engineCapacity;
	}
}
