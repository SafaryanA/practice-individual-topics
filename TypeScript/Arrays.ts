/*
Массивам
1.  Создай массив чисел. Напиши задачу на подсчёт количества элементов в массиве.
2.  Напиши функцию, которая проверяет, пуст ли массив.
3.  Напиши функцию, которая принимает массив чисел и возвращает их произведение.
4.  Создай массив строк и напиши задачу на поиск строки с максимальной длиной.
5.  Напиши функцию, которая удаляет все повторяющиеся значения из массива.
6.  Создай массив объектов и напиши задачу на поиск объекта с максимальным значением определённого поля.
7.  Напиши функцию, которая удаляет элемент из массива по индексу.
8.  Напиши задачу на объединение двух массивов в один с исключением дублирующихся значений.
9.  Создай двумерный массив и напиши функцию для нахождения максимального элемента в каждой строке.
10. Напиши задачу на сортировку массива строк в алфавитном порядке.
*/

// 1. Создай массив чисел. Напиши задачу на подсчёт количества элементов в массиве.
const arrNumber: number[] = [87, 8, 51, 16, 1, 511, 815, 51, 4]
const count: number = arrNumber.length
console.log(count)

// 2. Напиши функцию, которая проверяет, пуст ли массив.
const emptyArray: [] = []

function arrayEmpty(arr: any[]): string {
	return arr.length ? 'yes' : 'no'
}

console.log('exercise-2 (is the array empty) ' + arrayEmpty(arrNumber))
console.log('exercise-2 (is the array empty) ' + arrayEmpty(emptyArray))

// 3. Напиши функцию, которая принимает массив чисел и возвращает их произведение.
let val = 0

function multiplication(arr: number[]): number {
	arr.reduce((acc: number, curVal: number): number => {
		acc += curVal
		return (val = acc)
	})
	return val
}

/*
function multiplication(arr: number[]): number {
    return arr.reduce((acc, cur) => acc * cur, 1);
}
console.log(multiplication(arrNumber));

*/
console.log('exercise-3 ' + multiplication(arrNumber))
// 4. Создай массив строк и напиши задачу на поиск строки с максимальной длиной.
const arrString: string[] = [
	'vhsbxjxks',
	'biusjioxmxm',
	'kkkkkkkkkkkkkkkkkkkk',
	'd',
]
let maxString: string = ''

function getLongWords(arr: string[]): string {
	return arr.reduce((acc, cur) => (cur.length > acc.length ? cur : acc), '')
}
console.log(getLongWords(['short', 'longer', 'longest'])) // "longest"

console.log('exercise-4 ' + getLongWords(arrString))
// 5. Напиши функцию, которая удаляет все повторяющиеся значения из массива.
const arrDuplicateValueNumber: number[] = [
	7, 5, 118, 81, 5, 5, 16, 5, 758, 161, 7, 81,
]
const arrDuplicateValueString: string[] = [
	'art',
	'arm',
	'lol',
	'art',
	'gog',
	'lol',
]

let y: number[] | string[]

function removeDuplicates(arr: number[] | string[]): number[] | string[] {
	for (let i = 0; i < arr.length; i++) {
		for (let x = i + 1; x < arr.length; x++) {
			if (arr[i] === arr[x]) {
				arr.splice(x, 1)
				x--
			}
		}
	}
	return arr
}

/*
function removeDuplicates(arr: any[]): any[] {
    return Array.from(new Set(arr));
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
*/

// console.log ( "exercise-5 " + removeDuplicates ( arrDuplicateValueNumber ) )
// console.log ( "exercise-5 " + removeDuplicates ( arrDuplicateValueString ) )
// 6. Создай массив объектов и напиши задачу на поиск объекта с максимальным значением определённого поля.

const arrTwo: object[] = [
	{ x: 3, y: 7, z: 4 },
	{ x: 30, y: 17, z: 18 },
	{ x: 8, y: 70, z: 24 },
	{ x: 6, y: 27, z: 40 },
]
let maxObj

function getMaximumValue(arr: any[], key: any): any {
	maxObj = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if (maxObj[key] < arr[i][key]) {
			maxObj = arr[i]
		}
	}
	return maxObj
}

console.log('exercise-6 ' + getMaximumValue(arrTwo, 'z'))

// 7. Напиши функцию, которая удаляет элемент из массива по индексу.

function deleteEl(
	arr: number[] | string[],
	index: number,
	many: number
): number[] | string[] {
	arr.splice(index, many)
	return arr
}

console.log('exercise-7 ' + deleteEl(arrDuplicateValueNumber, 4, 1))
console.log('exercise-7 ' + deleteEl(arrDuplicateValueString, 4, 1))
// 8. Напиши задачу на объединение двух массивов в один с исключением дублирующихся значений.
const arrThree: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 45]
const arrFour: number[] = [1, 2, 3, 4, 45, 5, 6, 7, 8, 9, 22, 16]

function mergingTwoArrays(arrThree: number[], arrFour: number[]): number[] {
	for (let i = 0; i < arrFour.length; i++) {
		let coincidence: boolean = false
		for (let x = 0; x < arrThree.length; x++) {
			if (arrFour[i] === arrThree[x]) {
				coincidence = true
			}
		}
		if (!coincidence) arrThree.push(arrFour[i])
	}
	return arrThree
}

/*
function mergingTwoArrays(arr1: number[], arr2: number[]): number[] {
    return Array.from(new Set([...arr1, ...arr2]));
}
console.log(mergingTwoArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
*/
console.log('exercise-8 ' + mergingTwoArrays(arrThree, arrFour))

// 9. Создай двумерный массив и напиши функцию для нахождения максимального элемента в каждой строке.
const twoDimensionalArray = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 45],
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 16],
]
let maxVal: number[] = []

function getMaxElementVal(arr: any): number[] {
	for (let i = 0; i < arr.length; i++) {
		let maxNum: number = 0
		for (let x = 0; x < arr[i].length; x++) {
			maxNum < arr[i][x] ? (maxNum = arr[i][x]) : maxNum
		}
		maxVal.push(maxNum)
	}
	return maxVal
}

/*
function getMaxElementVal(arr: number[][]): number[] {
    return arr.map(row => Math.max(...row));
}
console.log(getMaxElementVal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [3, 6, 9]

*/
console.log('exercise-9 ' + getMaxElementVal(twoDimensionalArray))
// 10. Напиши задачу на сортировку массива строк в алфавитном порядке.
const arrSortString: string[] = ['d', 'v', 'c', 'a']
const arrSortNumber: number[] = [4, 7, 5, 9, 2, 1]
function getSort(arr: number[] | string[]): number[] | string[] {
	return arr.sort()
}

console.log('exercise-10 ' + getSort(arrSortString))
console.log('exercise-10 ' + getSort(arrSortNumber))
