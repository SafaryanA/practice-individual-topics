// /*
// Кортежи (tuple)
// 1.  Создай кортеж для представления координат (x, y).
// 2.  Создай кортеж с ID пользователя и его именем.
// 3.  Напиши функцию, которая принимает кортеж с тремя числами и возвращает их среднее.
// 4.  Создай кортеж для представления RGB-цвета (red, green, blue).
// 5.  Напиши функцию, которая принимает кортеж с четырьмя строками и возвращает их объединение.
// 6.  Создай кортеж, где первый элемент — строка, второй — число, третий — булево значение.
// 7.  Напиши функцию, которая принимает кортеж с ID товара и его ценой, и возвращает строку с информацией.
// 8.  Создай кортеж с названием фильма, годом выпуска и рейтингом.
// 9.  Напиши функцию, которая принимает массив кортежей и возвращает массив только первых элементов.
// 10.  Создай кортеж, представляющий точку в трёхмерном пространстве, и напиши функцию, которая вычисляет расстояние от начала координат.
// */

// // 1. Создай кортеж для представления координат (x, y).
// const coordinates: [number, number] = [15, 25]
// // 2. Создай кортеж с ID пользователя и его именем.
// const userT: [number, string] = [12, 'Artur']

// // 3. Напиши функцию, которая принимает кортеж с тремя числами и возвращает их среднее.
// function returnAverageTwo(arr: [number, number, number]): number {
// 	const [a, b, c] = arr
// 	return (a + b + c) / 3
// }

// console.log(returnAverageTwo([5, 7, 9]))

// // 4. Создай кортеж для представления RGB-цвета (red, green, blue).
// const userColor: [number, number, number] = [255, 58, 15]

// // 5. Напиши функцию, которая принимает кортеж с четырьмя строками и возвращает их объединение.
// function concatenation(arr: [string, string, string, string]): string {
// 	const [a, b, c, d] = arr
// 	return `${a}${b}${c}${d}`
// }

// console.log(concatenation(['A', 'r', 'tu', 'r']))

// function concatenationJoin(arr: [string, string, string, string]): string {
// 	return arr.join('')
// }
// console.log(concatenationJoin(['A', 'r', 'tu', 'r']))

// // 6. Создай кортеж, где первый элемент — строка, второй — число, третий — булево значение.
// const tupleOne: [string, number, boolean] = ['Artur', 30, true]

// // 7. Напиши функцию, которая принимает кортеж с ID товара и его ценой, и возвращает строку с информацией.
// function productInformation(arr: [number, number]): string {
// 	const [id, price] = arr
// 	return `Product ID: ${id}, Price: $${price}`
// }
// console.log(productInformation([101, 150])) // Product ID: 101, Price: $150

// // 8. Создай кортеж с названием фильма, годом выпуска и рейтингом.
// const movieInformation: [string, number, number] = ['Полиция Чикаго', 2014, 9.1]

// // 9. Напиши функцию, которая принимает массив кортежей и возвращает массив только первых элементов.
// function firstElements(arr: [number, number, number][]): number[] {
// 	return arr.map(tuple => tuple[0])
// }
// console.log(
// 	firstElements([
// 		[7, 9, 5],
// 		[1, 2, 3],
// 		[4, 5, 6],
// 	])
// )

// // 10. Создай кортеж, представляющий точку в трёхмерном пространстве, и напиши функцию, которая вычисляет расстояние от
// // начала координат.
// function calculateDistance(point: [number, number, number]): number {
// 	const [x, y, z] = point
// 	return Math.sqrt(x ** 2 + y ** 2 + z ** 2)
// }
// console.log(calculateDistance([3, 4, 5]))
