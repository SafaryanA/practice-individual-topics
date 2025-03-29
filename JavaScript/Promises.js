/* 
1.  Написать промис, который выполняется через 3 секунды.
2.  Сделать запрос через fetch с использованием промисов.
3.  Реализовать цепочку .then(), .catch().
4.  Написать функцию, возвращающую промис.
5.  Использовать Promise.all() для выполнения нескольких промисов.
6.  Сделать задержку (delay(ms)) через промис.
7.  Написать Promise.race(), выбирающий первый выполненный промис.
8.  Реализовать fetch, который повторяет запрос при ошибке.
9.  Создать промис с setTimeout() внутри.
10. Сделать промис с resolve() и reject(). 
*/

 


const users = [
	{ Id: 1, name: 'Artur', surName: 'Safaryan', age: 30 },
	{ Id: 2, name: 'Artur', surName: 'Safaryan', age: 30 },
	{ Id: -1, name: 'Artur', surName: 'Safaryan', age: 30 },
]

// 1. Написать промис, который выполняется через 3 секунды.
const messagePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const validUsers = users.filter(user => user.Id > 0)
		if (validUsers.length > 0) {
			resolve(validUsers)
		} else {
			reject('Ошибка: Некорректный ID пользователя!')
		}
	}, 3000)
})

messagePromise
	.then(response => {
		console.log('✅ Пользователи получены:', response)
		return response[0]
	})
	.then(user => {
		console.log('📌 ID:', user.Id)
		console.log('📌 Имя:', user.name)
	})
	.catch(err => console.error('❌', err))
	.finally(() => console.log('🔄 Запрос завершён!'))

// 2.  Сделать запрос через fetch с использованием промисов.
function fetchPromise(url) {
	new Promise((resolve, reject) => {
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Ошибка HTTP: ${response.status}`)
				}
				return response.json()
			})
			.then(data => resolve(data))
			.catch(error => reject(error))
	})
}

fetchPromise('https://jsonplaceholder.typicode.com/posts/1')
	.then(data => console.log(data))
	.catch(error => console.log(error))
	.finally(() => console.log('Запрос завершён'))

// 3.  Реализовать цепочку .then(), .catch().
function xmlPromiseOne(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Ошибка HTTP: ${response.status}`)
				}
				return response.json()
			})
			.then(data => resolve(data))
			.catch(error => reject(error))
	})
}
xmlPromiseOne('https://jsonplaceholder.typicode.com/posts/1')
	.then(data => console.log(data))
	.catch(error => console.log(error))
	.finally(() => console.log('Запрос завершён'))

// 4.  Написать функцию, возвращающую промис.
function returnPromise(url) {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`Ошибка HTTP:${response.status}`)
			}
			return response.json()
		})
	}
returnPromise('https://jsonplaceholder.typicode.com/posts/1')
 .then(data=>console.log(data))
 .catch(error=>console.error(error))
.finally(()=>console.warn('Запрос завершён'))
// 5.  Использовать Promise.all() для выполнения нескольких промисов.
function fetchData(url){
	return fetch(url)
	.then(response=>{
		if(!response.ok){
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}
		return response.json()
	})
}

const promise=[
	fetchData('https://jsonplaceholder.typicode.com/posts/1'),
	fetchData('https://jsonplaceholder.typicode.com/posts/2'),
	fetchData('https://jsonplaceholder.typicode.com/posts/3')
]


Promise.all(promise)
	.then(results=>{
		console.log("✅ Все данные получены:", results)
	})
	.catch(error=>{
		console.error("❌ Ошибка в одном из запросов:", error);
	})


// 6.  Сделать задержку (delay(ms)) через промис.

function delay(ms){
	return new Promise(resolve => setTimeout(resolve, ms))
}

console.log("⏳ Начало...");

delay(2000) // Задержка 2 секунды
    .then(() => console.log("✅ Прошло 2 секунды!"))
    .finally(() => console.log("🏁 Завершено!"));

// 7.  Написать Promise.race(), выбирающий первый выполненный промис.
function racePromiseFunction(url) {
	return fetch(url)
			.then(results => {
					if (!results.ok) {
							throw new Error(`Ошибка HTTP: ${results.status}`);
					}
					return results.json();
			});
}
const racePromises = [
	racePromiseFunction('https://jsonplaceholder.typicode.com/posts/1'),
	racePromiseFunction('https://jsonplaceholder.typicode.com/posts/2'),
	racePromiseFunction('https://jsonplaceholder.typicode.com/posts/3')
];

Promise.race(racePromises)
    .then(data => console.log("Первый завершённый промис:", data))
    .catch(error => console.error("Ошибка:", error))
    .finally(() => console.warn("🏁 Завершено!")); 



		
// 8.  Реализовать fetch, который повторяет запрос при ошибке.
function fetchPromise(url) {
	return new Promise((res, rej) => {
		fetch(url)
			.then(results => {
				if (!results.ok) {
					throw new Error(`Ошибка HTTP: ${results.status}`)
				}
				return results.json()
			})
			.then(data => res(data))
			.catch(error => {
				console.error(error)
				return fetchPromise(url)
				.then(res)
				.catch(rej)
			})
	})
}

fetchPromise('https://jsonplaceholder.typicode.com/posts/1')
	.then(data => console.log(data))
	.catch(error => console.error(error))
	.finally(() => console.warn('🏁 Завершено!'))
// function promiseSetTimeout(ms) {
	return new Promise((res, rej) => {
		setTimeout(() => {
				res(`Прошло ${ms} миллисекунд`); 
		}, ms);
});


promiseSetTimeout(2000)  
.then(data => console.log(data)) 
.catch(error => console.error(error));


// 10. Сделать промис с resolve() и reject().
function resRejPromise(url) {
return new Promise((res,rej) => {
	fetch(url)
	.then(results => {
		if(!results.ok){
			throw new Error(`Ошибка HTTP: ${results.status}`)
		}
		return results.json()
	})
	.then(data=>res(data))
	.catch(error=>rej(error))
})
}

resRejPromise('https://jsonplaceholder.typicode.com/posts/1')
.then(data=>console.log(data))
.catch(error=>console.error(error))
.finally(()=>console.warn('🏁 Завершено!'))
