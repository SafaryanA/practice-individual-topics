 /*
Type Guards
1. Напишите гвардейца для проверки, является ли значение строкой.
2. Реализуйте гвардейца для проверки, является ли объект экземпляром класса.
3. Напишите функцию, которая принимает массив строк или чисел и фильтрует только строки.
4. Реализуйте гвардейца для проверки, содержит ли объект свойство name.
5. Напишите функцию, которая принимает User | Admin и возвращает только Admin.
6. Реализуйте гвардейца для проверки, является ли значение массивом.
7. Напишите гвардейца для проверки, является ли объект датой (Date).
8. Реализуйте функцию, которая принимает string | number | boolean и выводит строку с типом значения.
9. Напишите функцию, которая принимает массив объектов и фильтрует только те, у которых есть поле id.
10. Реализуйте гвардейца для проверки, является ли значение функцией.
*/
// 1. Напишите гвардейца для проверки, является ли значение строкой.

function GuardsTypeString(val: any): boolean {
	return typeof val === 'string'
}

console.log(GuardsTypeString('Hi baby'))

// 2. Реализуйте гвардейца для проверки, является ли объект экземпляром класса.
class User {}
const GuardsUser = new User()
console.log(GuardsUser instanceof User)

// 3. Напишите функцию, которая принимает массив строк или чисел и фильтрует только строки.
function GuardsFilterString(val: (string | number)[]): string[] {
	return val.filter((el): el is string => typeof el === 'string')
}

console.log(GuardsFilterString(['Artur', 30, 'Safaryan', 176, 89]))

// 4. Реализуйте гвардейца для проверки, содержит ли объект свойство name.
interface HasName {
	name: string
	age: number
}

const GuardsObj = {
	name: 'Artur',
	age: 30,
}

function hasName(obj: unknown): obj is HasName {
	return typeof obj === 'object' && obj !== null && 'name' in obj
}

if (hasName(GuardsObj)) {
	console.log(GuardsObj.name)
} else {
	console.log('Объект не содержит name')
}

// 5. Напишите функцию, которая принимает User | Admin и возвращает только Admin.
interface GuardsUserInterface {
	type: 'User'
	name: string
}

interface GuardsAdminInterface {
	type: 'Admin'
	name: string
	permissions: string[]
}

const users: (GuardsUserInterface | GuardsAdminInterface)[] = [
	{ type: 'User', name: 'Artur' },
	{ type: 'Admin', name: 'Safaryan', permissions: ['READ', 'WRITE'] },
	{ type: 'User', name: 'Anna' },
	{ type: 'Admin', name: 'Dmitry', permissions: ['DELETE'] },
]

function returnAdmin(
	el: GuardsAdminInterface | GuardsUserInterface
): el is GuardsAdminInterface {
	return el.type === 'Admin'
}

const admins = users.filter(returnAdmin)

console.log(admins)

// 6. Реализуйте гвардейца для проверки, является ли значение массивом.
function isArr(val: unknown): boolean {
	return Array.isArray(val)
}

console.log(isArr([7, 8]))
console.log(isArr({ name: 'Artur' }))

// 7. Напишите гвардейца для проверки, является ли объект датой (Date).
function isDat(val: unknown): boolean {
	return val instanceof Date
}

console.log(isDat(new Date()))

// 8. Реализуйте функцию, которая принимает string | number | boolean и выводит строку с типом значения.
function returnType(val: string | number | boolean): string | boolean {
	return val.toString()
}

returnType(true)

// 9. Напишите функцию, которая принимает массив объектов и фильтрует только те, у которых есть поле id.
interface UserORInterface {
	id?: number
	name: string
	surname: string
	age: number
	city: string
}

const userOR: UserORInterface[] = [
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

function hasId(obj: UserORInterface): obj is Required<UserORInterface> {
	return obj.id !== undefined
}

const usersWithId = userOR.filter(hasId)

console.log(usersWithId)

// 10. Реализуйте гвардейца для проверки, является ли значение функцией.

function isFunction(value: unknown): boolean {
	return value instanceof Function
}

