/*
Тип never
1.  Напиши функцию, которая выбрасывает исключение.
2.  Напиши функцию с бесконечным циклом.
3.  Напиши функцию, которая завершает программу с ошибкой.
4.  Напиши функцию, которая проверяет значение и выбрасывает ошибку, если оно недопустимо.
5.  Напиши функцию, которая использует switch, но выбрасывает ошибку для неизвестного значения.
6.  Напиши функцию, которая завершает выполнение, если передан некорректный тип данных.
7.  Напиши функцию, которая проверяет все возможные варианты и выбрасывает ошибку для неизвестных.
8.  Напиши функцию, которая проверяет тип значения и завершает выполнение для неизвестных типов.
9.  Напиши функцию, которая завершает выполнение с сообщением об ошибке.
10. Напиши функцию, которая завершает процесс приложения.

*/

// 1.  Напиши функцию, которая выбрасывает исключение.
// function throwErrorOne(message: string): never {
// 	throw new Error(message)
// }
// throwErrorOne('This is an error!')

// 2.  Напиши функцию с бесконечным циклом.
function infiniteLoop(): never {
	while (true) {
		console.log('Running forever...')
	}
}
// infiniteLoop();

// 3.  Напиши функцию, которая завершает программу с ошибкой.
function terminateWithError(): never {
  throw new Error("Fatal error: Program terminated.");
}

terminateWithError();

// 4.  Напиши функцию, которая проверяет значение и выбрасывает ошибку, если оно недопустимо.
function validateValue(value: any): void {
	if (value === null || value === undefined) {
		throwError('Invalid value: null or undefined')
	}
	console.log('Value is valid:', value)
}
validateValue(42)
validateValue(null)

// 5.  Напиши функцию, которая использует switch, но выбрасывает ошибку для неизвестного значения.
function handleShape(shape: string): void {
	switch (shape) {
		case 'circle':
			console.log('Handling circle')
			break
		case 'square':
			console.log('Handling square')
			break
		default:
			throwError(`Unhandled shape: ${shape}`)
	}
}
handleShape('circle')
handleShape('triangle')

// 6.  Напиши функцию, которая завершает выполнение, если передан некорректный тип данных.
function checkType(value: any): void {
	if (typeof value !== 'string') {
		throwError('Invalid type: Expected a string')
	}
	console.log('Valid string:', value)
}
checkType('Hello')
checkType(123)

// 7.  Напиши функцию, которая проверяет все возможные варианты и выбрасывает ошибку для неизвестных.
type Animal = 'cat' | 'dog'

function handleAnimal(animal: Animal): void {
	switch (animal) {
		case 'cat':
			console.log('Handling cat')
			break
		case 'dog':
			console.log('Handling dog')
			break
		default:
			const exhaustiveCheck: never = animal
			throwError(`Unhandled animal: ${exhaustiveCheck}`)
	}
}
handleAnimal('cat')
handleAnimal('bird' as Animal)

// 8.  Напиши функцию, которая проверяет тип значения и завершает выполнение для неизвестных типов.
function throwError(message: string): never {
  throw new Error(message);
}

function processValue(value: any): void {
  if (typeof value === 'string') {
    console.log('Processing string:', value);
  } else if (typeof value === 'number') {
    console.log('Processing number:', value);
  } else {
    throwError(`Unknown type: Cannot process value of type ${typeof value}`);
  }
}

processValue('Hello');  
processValue(42);      
processValue(true);     


// 9.  Напиши функцию, которая завершает выполнение с сообщением об ошибке.
function fail(message: string): never {
	throwError(`Fatal error: ${message}`)
}
fail('Something went wrong')
// 10. Напиши функцию, которая завершает процесс приложения.
// function exitProcess(): never {
// 	console.log("Exiting application...");
// 	process.exit(0);
// }
// // exitProcess();
