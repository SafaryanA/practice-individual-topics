/*
 Intersection
 1. Создайте тип, который объединяет свойства User и Admin.
 2. Напишите функцию, которая принимает объект с пересечением полей Car и Truck.
 3. Реализуйте объект с пересечением id и timestamp.
 4. Создайте интерфейс, который объединяет поля name и age.
 5. Напишите функцию, которая принимает объект с полями x, y, z.
 6. Реализуйте пересечение типов для пользователя и метаданных.
 7. Создайте массив объектов, где каждый объект имеет пересечение типов.
 8. Реализуйте тип для товара, который объединяет поля price и discount.
 9. Напишите тип, который объединяет методы toString и toJSON.
 10. Создайте объект, который объединяет свойства двух разных интерфейсов.
 */

// 1. Создайте тип, который объединяет свойства User и Admin.
type UserOne = {
	username: string
	email: string
}

type Admin = {
	role: 'admin'
	permissions: string[]
}

type UserAdmin = UserOne & Admin

const userAdmin: UserAdmin = {
	username: 'Artur',
	email: 'artur@example.com',
	role: 'admin',
	permissions: ['READ', 'WRITE'],
}

// 2. Напишите функцию, которая принимает объект с пересечением полей Car и Truck.
interface Car {
	brand: string
	model: string
	wheels: number
	yearOfManufacture: number
	fuelType: 'gasoline' | 'diesel' | 'electric'
}

interface Truck {
	loadCapacity: number
	trailerLength: number
}

type CarTruck = Car & Truck

const myVehicle: CarTruck = {
	brand: 'Ford',
	model: 'F-150',
	wheels: 6,
	yearOfManufacture: 2024,
	fuelType: 'diesel',
	loadCapacity: 3000,
	trailerLength: 8,
}

function printCarTruckInfo(vehicle: CarTruck): string {
	return `Марка: ${vehicle.brand}, Грузоподъемность: ${vehicle.loadCapacity} кг`
}

console.log(printCarTruckInfo(myVehicle))

// 3. Реализуйте объект с пересечением id и timestamp.
interface IntersectionIdInterface {
	id: number
}

interface IntersectionTimestampInterface {
	timestamp: Date
}

type IdentifiedTimestamped = IntersectionIdInterface &
	IntersectionTimestampInterface

// 4. Создайте интерфейс, который объединяет поля name и age.

interface IntersectionNameInterface {
	name: string
}

interface IntersectionAgeInterface {
	age: number
}

interface Person extends IntersectionNameInterface, IntersectionAgeInterface {}

// 5. Напишите функцию, которая принимает объект с полями x, y, z.
interface CoordinatesInterface {
	x: number
	y: number
	z: number
}

function getCoordinates(obj: CoordinatesInterface): string {
	return `X=${obj.x}, Y=${obj.y} Z=${obj.z}`
}

const points: CoordinatesInterface = { x: 50, y: 40, z: 120 }
console.log(getCoordinates(points))
// 6. Реализуйте пересечение типов для пользователя и метаданных.
type User1 = {
	id: number
	name: string
	age: number
	surname: string
	email: string
}
type Metadata = {
	createdAt: Date
	updatedAt: Date
}
const person: User1 = {
	id: 1,
	name: 'Artur',
	surname: 'Safaryan',
	age: 30,
	email: 'artur@example.com',
}
const metadata: Metadata = { createdAt: new Date(), updatedAt: new Date() }
type UserWithMetadata = User1 & Metadata
const user1: UserWithMetadata = {
	id: 1,
	name: 'Artur',
	surname: 'Safaryan',
	age: 30,
	email: 'artur@example.com',
	createdAt: new Date('2024-01-01T10:00:00Z'),
	updatedAt: new Date(),
}
function printUserInfo(user: UserWithMetadata): void {
	console.log(`${user.id}`)
	console.log(`${user.name}`)
	console.log(`${user.email}`)
	console.log(`${user.createdAt.toISOString()}`)
	console.log(`${user.updatedAt.toISOString()}`)
}
printUserInfo(user1)
// 7. Создайте массив объектов, где каждый объект имеет пересечение типов.
interface IntersectionUserInterface {
	name: string
	surname: string
	age: number
}
interface IntersectionIDCityInterface {
	id?: number
	city: string
}
// interface IntersectionPeopleInterface extends IntersectionUserInterface, IntersectionIDCityInterface{}
type IntersectionPeopleInterface = IntersectionUserInterface &
	IntersectionIDCityInterface
const IntersectionPeople: IntersectionPeopleInterface[] = [
	{ id: 1, name: 'Artur', surname: 'Safaryan', age: 30, city: 'Yerevan' },
	{ name: 'Maria', surname: 'Ivanova', age: 25, city: 'Moscow' },
	{ id: 5, name: 'David', surname: 'Hakobyan', age: 35, city: 'Gyumri' },
	{ name: 'Anna', surname: 'Karapetyan', age: 28, city: 'Vanadzor' },
	{ name: 'Karen', surname: 'Mkrtchyan', age: 40, city: 'Hrazdan' },
	{ name: 'Lilit', surname: 'Melkonyan', age: 23, city: 'Abovyan' },
	{ id: 20, name: 'Arman', surname: 'Avetisyan', age: 27, city: 'Yerevan' },
	{ name: 'Sona', surname: 'Ghazaryan', age: 29, city: 'Stepanakert' },
	{ name: 'Hayk', surname: 'Petrosyan', age: 32, city: 'Kapan' },
	{ id: 12, name: 'Narine', surname: 'Harutyunyan', age: 26, city: 'Gavar' },
]
// 8. Реализуйте тип для товара, который объединяет поля price и discount.
interface Product {
	price: number
	discount: number
}

const item: Product = { price: 1000, discount: 10 }
console.log(item)

// 9. Напишите тип, который объединяет методы toString и toJSON.
interface Convertible {
	toString(): string
	toJSON(): string
}

const myObject: Convertible = {
	toString() {
		return 'Объект как строка'
	},
	toJSON() {
		return JSON.stringify(this)
	},
}

console.log(myObject.toString())
console.log(myObject.toJSON())

// 10. Создайте объект, который объединяет свойства двух разных интерфейсов.
interface IntersectionPeopleInterface2 {
	name: string
	surname: string
	age: number
	city: string
	phone: number
}
interface IntersectionPeopColorleInterface {
	hair: string
	skinColor: string
	eyesColor: string
}

interface IntersectionPeopleAllInformationInterface2
	extends IntersectionPeopleInterface2,
		IntersectionPeopColorleInterface {}
