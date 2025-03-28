// /*
// Объектам
// 1.  Создай объект с полями name и age. Напиши задачу на проверку типа значений в этих полях.
// 2.  Напиши функцию, которая добавляет новое поле в объект.
// 3.  Создай объект с вложенным объектом и добавь новое свойство в этот вложенный объект.
// 4.  Напиши функцию, которая возвращает все ключи объекта в виде массива.
// 5.  Создай объект, представляющий человека, с методами sayHello() и introduce() для вывода информации о себе.
// 6.  Напиши функцию, которая сравнивает два объекта и возвращает true, если они идентичны.
// 7.  Создай объект с динамическими ключами и напиши задачу на добавление новых ключей и значений.
// 8.  Напиши функцию, которая возвращает новый объект с удалением определённого свойства.
// 9.  Создай объект с геттером и сеттером, которые обрабатывают значение числа.
// 10. Напиши задачу на сериализация объекта в JSON и обратно.
// */

// // 1. Создай объект с полями name и age. Напиши задачу на проверку типа значений в этих полях.

// const userObj = {
// 	name: 'Artur',
// 	age: 30,
// }
// function userType(obj: { name: any; age: any }): { name: string; age: string } {
// 	return {
// 		name: typeof obj.name,
// 		age: typeof obj.age,
// 	}
// }

// // 2. Напиши функцию, которая добавляет новое поле в объект.
// type userType = {
// 	name: string
// 	age: number
// 	[key: string]: any
// }
// function addField(
// 	obj: { [key: string]: any },
// 	newKey: string,
// 	value: any
// ): { [key: string]: any } {
// 	obj[newKey] = value
// 	return obj
// }

// console.log(addField(userObj, 'surname', 'Safaryan'))

// // 3. Создай объект с вложенным объектом и добавь новое свойство в этот вложенный объект.
// interface nestedObjectsInterface {
// 	name: string
// 	surname: string
// 	age: number
// 	car: {
// 		description: string
// 		brand: string
// 		yearIssue: number
// 		[key: string]: any
// 	}

// 	[key: string]: any
// }

// let nestedObjects: nestedObjectsInterface = {
// 	name: 'Artur',
// 	surname: 'Safaryan',
// 	age: 30,
// 	car: {
// 		description:
// 			"Lorem Ipsum has been the industry's standard dummy text ever since the 15",
// 		brand: 'NISSAN',
// 		yearIssue: 2018,
// 	},
// }

// function setNestedObject(
// 	obj: nestedObjectsInterface,
// 	key: string,
// 	value: any
// ): nestedObjectsInterface {
// 	obj.car[key] = value
// 	obj[key] = value
// 	return obj
// }

// console.log(setNestedObject(nestedObjects, 'color', 'black'))
// console.log(setNestedObject(nestedObjects, 'interior', 'white'))

// // 4. Напиши функцию, которая возвращает все ключи объекта в виде массива.
// function collectKeys(obj: any): string[] {
// 	return Object.keys(obj)
// }

// console.log(collectKeys(nestedObjects))
// // 5. Создай объект, представляющий человека, с методами sayHello() и introduce() для вывода информации о себе.
// type introduceType = {
// 	name: string
// 	surname: string
// 	age: number
// }

// function sayHello(): string {
// 	return 'good afternoon dear'
// }

// function introduce(): introduceType {
// 	return {
// 		name: 'artur',
// 		surname: 'Safaryan',
// 		age: 30,
// 	}
// }

// const userFunction = {
// 	hello: sayHello(),
// 	introduce: introduce(),
// }
// console.log(userFunction.hello)
// console.log(userFunction.introduce)
// // 6. Напиши функцию, которая сравнивает два объекта и возвращает true, если они идентичны.
// const objOne = {
// 	name: 'Artur',
// }
// const objTwo = {
// 	name: 'Artur',
// }
// const objThree = {
// 	surname: 'Safaryan',
// }
// function getIdentityObjects(argOne: any, argTwo: any): boolean {
// 	const arrOneKey = Object.keys(argOne)
// 	const arrTwoKey = Object.keys(argTwo)
// 	const arrOneVal = Object.values(argOne)
// 	const arrTwoVal = Object.values(argTwo)
// 	if (arrOneKey.length !== arrTwoKey.length) {
// 		return false
// 	}
// 	for (let i = 0; i < arrOneKey.length; i++) {
// 		if (arrOneKey[i] !== arrTwoKey[i] && arrOneVal[i] !== arrTwoVal[i]) {
// 			return false
// 		}
// 	}

// 	return true
// }

// // console.log (getIdentityObjects(objOne,objTwo))
// // console.log (getIdentityObjects(objOne,objThree))

// // 7. Создай объект с динамическими ключами и напиши задачу на добавление новых ключей и значений.
// interface humanCharacteristicsInterface {
// 	[key: string]: string | number
// }

// const humanCharacteristics = {}

// function setHumanCharacteristics(
// 	obj: humanCharacteristicsInterface,
// 	key: string,
// 	val: string | number
// ): humanCharacteristicsInterface {
// 	obj[key] = val
// 	return obj
// }

// console.log(setHumanCharacteristics(humanCharacteristics, 'name', 'Artur'))

// // 8. Напиши функцию, которая возвращает новый объект с удалением определённого свойства.
// function deletingPropertyObject(
// 	obj: nestedObjectsInterface,
// 	key: string
// ): nestedObjectsInterface {
// 	delete obj[key]
// 	return obj
// }

// console.log(deletingPropertyObject(nestedObjects, 'name'))
// // 9. Создай объект с геттером и сеттером, которые обрабатывают значение числа.
// const objWithGetterSetter = {
// 	_value: 0,
// 	get value(): number {
// 		return this._value
// 	},
// 	set value(val: number) {
// 		if (typeof val === 'number' && val >= 0) {
// 			this._value = val
// 		} else {
// 			console.error('Invalid value')
// 		}
// 	},
// }

// objWithGetterSetter.value = 42
// console.log(objWithGetterSetter.value) // 42

// objWithGetterSetter.value = -5 // Error: Invalid value

// // 10 Напиши задачу на сериализация объекта в JSON и обратно.
// function serializeToJSON(obj: any): string {
// 	return JSON.stringify(obj)
// }

// function parseFromJSON(json: string): any {
// 	return JSON.parse(json)
// }

// const jsonString = serializeToJSON(userObj)
// console.log(jsonString)

// const parsedObject = parseFromJSON(jsonString)
// console.log(parsedObject)
