/*
Enums
1. Создайте перечисление для дней недели.
2. Напишите функцию, которая принимает перечисление Direction (вверх, вниз, влево, вправо) и возвращает описание.
3. Создайте строковое перечисление для цветов и реализуйте функцию, возвращающую HEX-код.
4. Реализуйте числовое перечисление для уровней сложности (легко, средне, сложно).
5. Напишите функцию, которая принимает перечисление статусов задачи (новая, в процессе, завершена) и возвращает строку.
6. Создайте перечисление для типов пользователей (админ, редактор, гость) и напишите функцию для проверки доступа.
7. Реализуйте перечисление для HTTP-статусов и функцию, возвращающую сообщение на основе кода.
8. Напишите функцию, которая принимает перечисление с направлениями и возвращает следующее направление.
9. Создайте строковое перечисление для категорий товаров (одежда, электроника, продукты).
10. Реализуйте функцию, которая принимает перечисление для времен года и возвращает описание.
*/

// 1. Создайте перечисление для дней недели.
enum WeekDays {
	Sunday = 'Sunday',
	Monday = 'Monday',
	Tuesday = 'Tuesday',
	Wednesday = 'Wednesday',
	Thursday = 'Thursday',
	Friday = 'Friday',
	Saturday = 'Saturday',
}

console.log(WeekDays.Monday)

// 2. Напишите функцию, которая принимает перечисление Direction (вверх, вниз, влево, вправо) и возвращает описание.
enum Direction {
	up = 'up',
	down = 'down',
	left = 'left',
	right = 'right',
}

// 3. Создайте строковое перечисление для цветов и реализуйте функцию, возвращающую HEX-код.
enum Color {
	Red = '#FF0000',
	White = '#FFFFFF',
	Black = '#000000',
	Blue = '#0000FF',
}

function getHexCode(color: Color): string {
	return `HEX-код цвета: ${color}`
}

console.log(getHexCode(Color.Black))

// 4. Реализуйте числовое перечисление для уровней сложности (легко, средне, сложно).
enum difficultyLevels {
	easy = 1,
	medium = 2,
	difficult = 3,
}

console.log(difficultyLevels)
console.log(difficultyLevels.easy)
console.log(difficultyLevels.medium)
console.log(difficultyLevels.difficult)

// 5. Напишите функцию, которая принимает перечисление статусов задачи (новая, в процессе, завершена) и возвращает
// строку.
enum TaskStatus {
	New = 'New',
	InProgress = 'In Progress',
	Completed = 'Completed',
}

function getStatusDescription(status: TaskStatus): string {
	return `Статус задачи: ${status}`
}

console.log(getStatusDescription(TaskStatus.InProgress))
// 6. Создайте перечисление для типов пользователей (админ, редактор, гость) и напишите функцию для проверки доступа.
enum Users {
	Admin = 'Admin',
	Editor = 'Editor',
	Guest = 'Guest',
}

console.log(Users.Admin)
console.log(Users.Editor)
console.log(Users.Guest)

// 7. Реализуйте перечисление для HTTP-статусов и функцию, возвращающую сообщение на основе кода.
enum HttpStatus {
	OK = 200,
	CREATED = 201,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
	SERVICE_UNAVAILABLE = 503,
}

function getHttpStatusMessage(status: HttpStatus): string {
	switch (status) {
		case HttpStatus.OK:
			return 'OK: Запрос успешно выполнен.'
		case HttpStatus.CREATED:
			return 'Created: Ресурс успешно создан.'
		case HttpStatus.NO_CONTENT:
			return 'No Content: Нет содержимого.'
		case HttpStatus.BAD_REQUEST:
			return 'Bad Request: Неверный запрос.'
		case HttpStatus.UNAUTHORIZED:
			return 'Unauthorized: Неавторизованный доступ.'
		case HttpStatus.FORBIDDEN:
			return 'Forbidden: Доступ запрещён.'
		case HttpStatus.NOT_FOUND:
			return 'Not Found: Ресурс не найден.'
		case HttpStatus.INTERNAL_SERVER_ERROR:
			return 'Internal Server Error: Внутренняя ошибка сервера.'
		case HttpStatus.SERVICE_UNAVAILABLE:
			return 'Service Unavailable: Сервер недоступен.'
		default:
			return 'Неизвестный статус.'
	}
}

// 8. Напишите функцию, которая принимает перечисление с направлениями и возвращает следующее направление.
enum DirectionEnum {
	left = 'Left',
	Right = 'Right',
	Up = 'UP',
	Down = 'Down',
}

function getDirectionEnum(val: DirectionEnum): string {
	switch (val) {
		case DirectionEnum.left:
			return DirectionEnum.Right
		case DirectionEnum.Right:
			return DirectionEnum.Up
		case DirectionEnum.Up:
			return DirectionEnum.Down
		case DirectionEnum.Down:
			return DirectionEnum.left
	}
}

console.log(getDirectionEnum(DirectionEnum.left))

// 9. Создайте строковое перечисление для категорий товаров (одежда, электроника, продукты).
enum ProductCategories {
	CLOTHES = 'Clothes',
	ELECTRONICS = 'Electronics',
	FOOD = 'Food',
}

// 10. Реализуйте функцию, которая принимает перечисление для времен года и возвращает описание.
enum Seasons {
	SUMMER = 'Summer',
	AUTUMN = 'Autumn',
	WINTER = 'Winter',
	SPRING = 'Spring',
}

function getDescriptionSeasons(val: Seasons): string {
	switch (val) {
		case Seasons.SUMMER:
			return 'Summer is the warmest time of the year. Thunderstorms and showers are common. In summer, flowers bloom, mushrooms and berries appear, and fruits ripen on plants. Animals have babies'
		case Seasons.AUTUMN:
			return 'It gets colder in autumn. The weather is cloudy. The leaves on the trees turn yellow and fall. Migratory birds fly away to warmer regions.'
		case Seasons.WINTER:
			return 'It is cold in winter. There are snowfalls and blizzards. Nature sleeps. Plant growth stops. Deciduous trees and bushes shed their leaves in autumn. It is difficult for animals to find food. Many birds fly away to warmer regions in autumn.'
		case Seasons.SPRING:
			return 'In spring, the sun shines brighter. It gets warmer every day. The snow begins to melt. Nature comes alive. Leaves and flowers bloom on the trees. Birds build nests. Animals that slept all winter wake up.'
	}
}
