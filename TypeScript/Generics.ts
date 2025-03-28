/*
Универсальные типы (Generics)
1.  Напиши функцию, которая принимает массив любого типа и возвращает его длину.
2.  Создай универсальный интерфейс для описания страницы с id и данными (data).
3.  Напиши функцию, которая принимает массив любого типа и возвращает первый элемент.
4.  Создай универсальный класс Stack, поддерживающий методы push и pop.
5.  Напиши функцию, которая принимает массив чисел или строк и возвращает их общую длину.
6.  Создай универсальный тип для результата операции (успех или ошибка).
7.  Напиши универсальную функцию, которая принимает объект и ключ, и возвращает значение этого ключа.
8.  Создай универсальный интерфейс для описания API-ответа с данными и ошибкой.
9.  Напиши функцию, которая принимает два значения любого типа и возвращает их в виде кортежа.
10. Создай универсальный интерфейс для описания дерева (узлы и листья).
*/

/*
Generic Utility Types
TypeScript offers several built-in utility types based on generics:

Partial<T>: Makes all properties optional.
Required<T>: Makes all properties required.
Readonly<T>: Makes all properties read-only.
Pick<T, K>: Selects specific properties from a type.
Record<K, T>: Creates a type with a set of keys of type K and values of type T.
*/

//1.  Напиши функцию, которая принимает массив любого типа и возвращает его длину.
function getArrayLength<T>(array: T[]): number {
	return array.length
}

const lengthOne = getArrayLength([1, 2, 3])

// 2.  Создай универсальный интерфейс для описания страницы с id и данными (data).
interface Page<T> {
	id: string
	data: T
}

const page: Page<string> = {
	id: '1',
	data: 'Страница данных',
}

// 3.  Напиши функцию, которая принимает массив любого типа и возвращает первый элемент.
function getFirstElement<T>(array: T[]): T | undefined {
	return array[0]
}

const first = getFirstElement([1, 2, 3])

// 4.  Создай универсальный класс Stack, поддерживающий методы push и pop.

class Stack<T> {
	private items: T[] = []

	push(item: T): void {
		this.items.push(item)
	}

	pop(): T | undefined {
		return this.items.pop()
	}
}

const stack = new Stack<number>()
stack.push(1)
stack.push(2)
console.log(stack.pop())

// 5.  Напиши функцию, которая принимает массив чисел или строк и возвращает их общую длину.

function getTotalLength<T extends number | string>(array: T[]): number {
	return array.reduce((sum, item) => sum + item.toString().length, 0)
}

const totalLength = getTotalLength(['hello', 'world'])

// 6.  Создай универсальный тип для результата операции (успех или ошибка).

type OperationResult<T> =
	| { success: true; data: T }
	| { success: false; error: string }

const successResult: OperationResult<string> = { success: true, data: 'Успех' }
const errorResult: OperationResult<string> = { success: false, error: 'Ошибка' }

// 7.  Напиши универсальную функцию, которая принимает объект и ключ, и возвращает значение этого ключа.

function getValueByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key]
}

const objUser = { name: 'Alice', age: 25 }
const value = getValueByKey(objUser, 'name')

// 8.  Создай универсальный интерфейс для описания API-ответа с данными и ошибкой.

interface ApiResponse<T> {
	data: T | null
	error: string | null
}

const response: ApiResponse<number[]> = {
	data: [1, 2, 3],
	error: null,
}

// 9.  Напиши функцию, которая принимает два значения любого типа и возвращает их в виде кортежа.
function makeTuple<T, U>(value1: T, value2: U): [T, U] {
	return [value1, value2]
}

const tuple = makeTuple('Alice', 25)

// 10. Создай универсальный интерфейс для описания дерева (узлы и листья).
interface TreeNode<T> {
	value: T
	children?: TreeNode<T>[]
}

const tree: TreeNode<number> = {
	value: 1,
	children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }],
}
