/*
Тип string
1. Объяви переменную name и присвой ей строку "TypeScript".
2. Объедини две строки, используя шаблонные литералы.
3. Проверь длину строки и выведи результат в консоль.
4. Преобразуй строку "typescript" к верхнему регистру.
5. Найди индекс символа "S" в строке "TypeScript".
6. Удали пробелы из строки " Hello TypeScript ".
7. Замени слово "Type" на "Java" в строке "TypeScript".
8. Проверь, начинается ли строка "TypeScript" с "Type".
9. Создай функцию, которая принимает строку и возвращает ее длину.
10. Напиши функцию, которая проверяет, является ли строка палиндромом.

*/

//1. Объяви переменную name и присвой ей строку "TypeScript".
const nam: string = 'TypeScript'
console.log(nam)

//2. Объедини две строки, используя шаблонные литералы.
const dog: string = 'pit bull'
const dogName: string = 'MAX'
console.log(`${dog} ${dogName}`)
// 3. Проверь длину строки и выведи результат в консоль
const str: string =
	'Lorem Ipsum is simply dummy text of the printing and typesetting'
const strLength: number = str.length
console.log(strLength)
// 4. Преобразуй строку "typescript" к верхнему регистру.
const strTwo: string = 'typescript'
const strTwoUpper: string = strTwo.toUpperCase()
console.log(strTwoUpper)
// 5. Найди индекс символа "S" в строке "TypeScript".
function searchIndex(str: string, sym: string): number {
	return str.indexOf(sym)
}
console.log(searchIndex('TypeScript', 'S'))
// 6. Удали пробелы из строки " Hello TypeScript ".
function strSplit(str: string): string {
	return str.trim()
}
console.log(strSplit(' Hello TypeScript '))
// 7. Замени слово "Type" на "Java" в строке "TypeScript".
function changeStr(
	str: string,
	whatChange: string,
	exchangingFor: string
): string {
	return str.replace(whatChange, exchangingFor)
}
console.log(changeStr('TypeScript', 'Type', 'Java'))
// 8. Проверь, начинается ли строка "TypeScript" с "Type".

function startsWith(str: string, search: string): boolean {
	return str.indexOf(search) === 0
}

console.log(startsWith('TypeScript', 'Type'))
// 9. Создай функцию, которая принимает строку и возвращает ее длину.
const strThree =
	'd it to make a type specimen book. It has survived not only five centuries'
function getStrLength(str: string): number {
	return str.length
}

console.log(getStrLength(strThree))
// 10. Напиши функцию, которая проверяет, является ли строка палиндромом.
function palindrome(str: string): boolean {
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str[str.length - i - 1]) {
			return false
		}
		if (str.length / i <= 2) {
			console.log('lll')
			return true
		}
	}
	return true
}

console.log(palindrome('123321'))
console.log(palindrome('12321'))
console.log(palindrome('1234564321'))
