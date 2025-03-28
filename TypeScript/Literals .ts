/*
Литералы и пользовательские типы
1.  Объяви переменную color, которая может принимать значения "red", "green", или "blue".
2.  Создай пользовательский тип Status для значений "active", "inactive", "pending".
3.  Напиши функцию, которая принимает направление ("left", "right", "up", "down") и выводит его в консоль.
4.  Создай пользовательский тип ID, который может быть строкой или числом, и напиши функцию, принимающую ID.
5.  Напиши функцию, которая принимает роль пользователя ("admin", "editor", "viewer") и возвращает true, если роль "admin".
6.  Создай тип для переменной, которая может быть одной из пяти возможных строковых констант.
7.  Напиши функцию, которая принимает строку "yes" или "no" и возвращает булево значение.
8.  Создай тип для кнопки ("primary" | "secondary" | "danger") и напиши функцию, которая возвращает стиль кнопки.
9.  Используй пользовательский тип для описания разрешений ("read" | "write" | "execute") в массиве.
10. Напиши функцию, которая принимает значение из пользовательского типа и выбрасывает ошибку, если значение некорректное.
*/

// 1. Объяви переменную color, которая может принимать значения "red", "green", или "blue".
let color: 'red' | 'green' | 'blue'
color = 'red'
// 2. Создай пользовательский тип Status для значений "active", "inactive", "pending".
type Status = 'active' | 'inactive' | 'pending'
// 3. Напиши функцию, которая принимает направление ("left", "right", "up", "down") и выводит его в консоль.
type direction = 'left' | 'right' | 'up' | 'down'

function getDirection(el: 'left' | 'right' | 'up' | 'down'): void {
	console.log('exercise-3 (id) ' + el)
}

function getDirectionType(el: direction): void {
	console.log('exercise-3-type (id) ' + el)
}

getDirection('left')
getDirectionType('right')
// 4. Создай пользовательский тип ID, который может быть строкой или числом, и напиши функцию, принимающую ID.
type ID = number | string

function userID(id: ID): void {
	console.log('exercise-4 (id) ' + id)
}

userID('user1')

// 5. Напиши функцию, которая принимает роль пользователя ("admin", "editor", "viewer") и возвращает true, если роль
// "admin".
function getUserRoles(rol: 'admin' | 'editor' | 'viewer'): boolean {
	return rol === 'admin'
}

console.log('exercise-5 (true) ' + getUserRoles('admin'))
console.log('exercise-5 (false) ' + getUserRoles('editor'))
type roles = 'admin' | 'editor' | 'viewer'

function getUserRolesType(rol: roles): boolean {
	return rol === 'admin'
}

console.log('exercise-5-type (true) ' + getUserRolesType('admin'))
console.log('exercise-5-type (false) ' + getUserRolesType('editor'))
// 6. Создай тип для переменной, которая может быть одной из пяти возможных строковых констант.
type ballDirection = 'left' | 'right' | 'up' | 'down' | 'center'
let ball: ballDirection = 'left'

// 7. Напиши функцию, которая принимает строку "yes" или "no" и возвращает булево значение.
function yesOrNo(select: 'yes' | 'no'): boolean {
	return select === 'yes'
}

console.log('exercise-7-type (true) ' + yesOrNo('yes'))
console.log('exercise-7-type (false) ' + yesOrNo('no'))
// 8. Создай тип для кнопки ("primary" |"secondary" | "danger") и напиши функцию, которая возвращает стиль кнопки.
type buttonType = 'primary' | 'secondary' | 'danger'
function getButtonType(el: buttonType): buttonType {
	switch (el) {
		case 'primary':
			return 'primary'
		case 'secondary':
			return 'secondary'
		case 'danger':
			return 'danger'
		default:
			throw new Error('Unknown button type')
	}
}
console.log('exercise-8-type (primary) ' + getButtonType('primary'))
console.log('exercise-8-type (primary) ' + getButtonType('primary'))
// 9. Используй пользовательский тип для описания разрешений ("read" | "write" | "execute") в массиве.
type permissionsType = ('read' | 'write' | 'execute')
const permissions: permissionsType[] = ['read', 'write', 'execute']
// 10. Напиши функцию, которая принимает значение из пользовательского типа и выбрасывает ошибку, если значение некорректное.

function userPermissions(perm: permissionsType): void | never {
	switch (perm) {
		case "read":
			console.log("exercise-10 (read)")
			break
		case "write":
			console.log("exercise-10 (write)")
			break
	case "execute": 
	console.log("exercise-10 (execute)")
	break
	default: console.log('nothing matches')

	}
}
userPermissions("read")
