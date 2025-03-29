/* 
1.  Сделать GET-запрос к API и вывести ответ в консоль.
2.  Сделать POST-запрос с отправкой данных.
3.  Сделать запрос, обработать ошибку (например, указать неправильный URL).
4.  Запросить несколько API и обработать их в порядке выполнения.
5.  делай GET-запрос на https://jsonplaceholder.typicode.com/posts/1 и выведи ответ в консоль.
6.  Сделай POST-запрос на https://jsonplaceholder.typicode.com/posts, отправляя { title: "Hello", body: "World" }.
7.  Выведи в HTML-страницу заголовок поста, полученного по GET.
8.  Выведи ошибку в консоль, если сервер вернет 404.
9.  Добавь обработку readyState, чтобы отслеживать изменение состояния запроса.
10. Сделай GET-запрос к несуществующему URL и выведи "Ошибка 404" в alert().
11. Сделай запрос на медленный сервер (например, https://httpstat.us/200?sleep=5000) и установи тайм-аут xhr.timeout = 3000.
12. Добавь abort() — отмени запрос через 2 секунды, если ответ не получен.
 */

// 1.  Сделать GET-запрос к API и вывести ответ в консоль.
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		console.log('Ответ сервера:', xhr.responseText)
	}
}

xhr.send()
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true)
xhr.onreadystatechange = function () {
	if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
		console.log('Ответ сервера:', xhr.responseText)
	}
}
xhr.send()

// 2.  Сделать POST-запрос с отправкой данных.
const xhrTwo = new XMLHttpRequest()
xhrTwo.open('POST', 'https://jsonplaceholder.typicode.com/posts', true)
xhrTwo.setRequestHeader('Content-Type', 'application/json')
xhrTwo.onreadystatechange = function () {
	if (xhrTwo.readyState === XMLHttpRequest.DONE) {
		if (xhrTwo.status >= 200 && xhrTwo.status < 300) {
			console.log('Ответ сервера:', xhrTwo.responseText)
		} else {
			console.error('Ошибка запроса:', xhrTwo.status, xhrTwo.statusText)
		}
	}
}
const data = JSON.stringify({
	title: 'Hello World',
	body: 'This is a test post',
	userId: 1,
})
xhrTwo.send(data)
// 3.  Сделать запрос, обработать ошибку (например, указать неправильный URL).
const xhrThree = new XMLHttpRequest()
xhrThree.open('GET', 'https://jsonplaceholder.typicode.com/use', true)
xhrThree.onreadystatechange = function () {
	if (xhrThree.readyState === XMLHttpRequest.DONE) {
		if (xhrThree.status >= 200 && xhrThree.status < 300) {
			console.log('Ответ сервера:', xhrThree.responseText)
		} else {
			console.error('Ошибка запроса:', xhrThree.status, xhrThree.statusText)
		}
	}
}

xhrThree.onerror = function () {
	console.error('Сетевая ошибка: не удалось выполнить запрос.')
}
xhrThree.timeout = 5000
xhrThree.ontimeout = function () {
	console.error('Ошибка: истекло время ожидания запроса.')
}

xhrThree.send()
// 4.  Запросить несколько API и обработать их в порядке выполнения.

const xhrFour = new XMLHttpRequest()
xhrFour.open('POST', URL, true)
xhrFour.setRequestHeader('Content-Type', 'application/json')
xhrFour.onreadystatechange = function () {
	if (xhrFour.readyState === XMLHttpRequest.DONE) {
		if (xhrFour.status >= 200 && xhrFour.status < 300) {
			console.log('Ответ сервера:', xhrThree.responseText)
		} else {
			console.error('Ошибка запроса:', xhrFour.status, xhrFour.statusText)
		}
	}
}
const dataOne = JSON.stringify({
	name: 'Artur',
	age: 30,
	city: 'Yerevan',
})
xhrFour.onerror = function () {
	console.error('Сетевая ошибка: не удалось выполнить запрос.')
}
xhrFour.timeout = 5000
xhrFour.ontimeout = function () {
	console.error('Ошибка: истекло время ожидания запроса.')
}
xhrFour.send(dataOne)

// 5.  делай GET-запрос на https://jsonplaceholder.typicode.com/posts/1 и выведи ответ в консоль.

function getData(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url, true)
		xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						const data = JSON.parse(xhr.responseText)
						resolve(data)
					} catch (error) {
						reject(reject('Ошибка при парсинге JSON'))
					}
					resolve(xhr.responseText.json())
				} else {
					reject(xhr.responseText)
					console.log('Ошибка запроса:', xhr.status, xhr.statusText)
				}
			}
		}
		xhr.onerror = function () {
			reject('Сетевая ошибка: не удалось выполнить запрос.')
		}
		xhr.timeout = 5000
		xhr.ontimeout = function () {
			reject('Ошибка: истекло время ожидания запроса.')
		}
		xhr.send()
	})
}

getData('https://jsonplaceholder.typicode.com/posts/1')
	.then(res => {
		console.log(res)
	})
	.catch(error => console.error(error))

// 6.  Сделай POST-запрос на https://jsonplaceholder.typicode.com/posts, отправляя { title: "Hello", body: "World" }.

function setData(url, obj) {
	return new Promise((res, rej) => {
		const xhr = new XMLHttpRequest()
		xhr.open('POST', url, true)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						const data = JSON.parse(xhr.responseText)
						res(data)
					} catch (err) {
						rej('Ошибка при парсинге JSON: ' + err.message)
					}
				} else {
					rej(`Ошибка запроса: ${xhr.status} ${xhr.statusText}`)
				}
			}
		}
		xhr.onerror = function () {
			rej('Сетевая ошибка: не удалось выполнить запрос.')
		}
		xhr.timeout = 5000
		xhr.ontimeout = function () {
			rej('Ошибка: истекло время ожидания запроса.')
		}
		const jsonData = JSON.stringify(obj)
		xhr.send(jsonData)
	})
}
setData('https://jsonplaceholder.typicode.com/posts', {
	title: 'Hello',
	body: 'World',
})
	.then(respons => console.log(respons))
	.catch(error => console.error(error))

// 7.  Выведи в HTML-страницу заголовок поста, полученного по GET.

function getTitle(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url, true)
		xhr.onreadystatechange = function () {
			if (this.readyState === XMLHttpRequest.DONE) {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						const jsonPars = JSON.parse(xhr.responseText)
						resolve(jsonPars)
					} catch (err) {
						reject('Ошибка при парсинге JSON: ' + err.message)
					}
				} else {
					reject(`Ошибка запроса: ${xhr.status} ${xhr.statusText}`)
				}
			}
		}
		xhr.onerror = function () {
			reject('Сетевая ошибка: не удалось выполнить запрос.')
		}
		xhr.timeout = 5000
		xhr.ontimeout = function () {
			reject('Ошибка: истекло время ожидания запроса.')
		}
		xhr.send()
	})
}
getTitle('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => {
		const title = document.getElementById('title')
		console.log(response)
		console.log(response.title)
		title.innerHTML = response.title
	})
	.catch(error => console.error(error))

// 8.  Выведи ошибку в консоль, если сервер вернет 404.

function notFound(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url, true)
		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 300) {
				try {
					const jsonPars = JSON.parse(xhr.responseText)
					resolve(jsonPars)
				} catch (error) {
					reject('Ошибка при парсинге JSON: ' + error.message)
				}
			} else {
				reject(`Ошибка запроса: ${xhr.status}, ${xhr.statusText}`)
			}
		}
		xhr.onerror = function () {
			reject('Сетевая ошибка: не удалось выполнить запрос.')
		}
		xhr.timeout = 5000
		xhr.ontimeout = function () {
			reject('Ошибка: истекло время ожидания запроса.')
		}
		xhr.send()
	})
}
notFound('https://jsonplaceholder.typicode.com/posts/1')
	.then(respons => console.log(respons))
	.catch(error => console.error(error))

// 9.  Добавь обработку readyState, чтобы отслеживать изменение состояния запроса.

function funcReadyState(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url, true)
		xhr.onreadystatechange = function () {
			switch (xhr.readyState) {
				case 0:
					console.log('UNSENT')
					break
				case 1:
					console.log('OPENED')
					break
				case 2:
					console.log('HEADERS_RECEIVED')
					break
				case 3:
					console.log('LOADING')
					break
				case 4:
					console.log('DONE')
					if (xhr.status >= 200 && xhr.status < 300) {
						try {
							const jsonPars = JSON.parse(xhr.responseText)
							resolve(jsonPars)
						} catch (error) {
							reject('Ошибка при парсинге JSON: ' + error.message)
						}
					} else {
						reject(`Ошибка запроса:${xhr.status}, ${xhr.statusText}`)
					}
					break
			}
		}

		xhr.onerror = function () {
			reject('Сетевая ошибка: не удалось выполнить запрос.')
		}
		xhr.timeout = 5000
		xhr.ontimeout = function () {
			reject('Ошибка: истекло время ожидания запроса.')
		}
		xhr.send()
	})
}
funcReadyState('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => console.log(response))
	.catch(error => console.error(error))

// 10.  Сделай GET-запрос к несуществующему URL и выведи "Ошибка 404" в alert().

function nonExistentURL(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url, true)
		xhr.onreadystatechange = function () {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						const jsonPars = JSON.parse(xhr.responseText)
						resolve(jsonPars)
					} catch (error) {
						reject('Ошибка при парсинге JSON: ' + error.message)
					}
				} else {
					reject(`Ошибка запроса: ${xhr.status},${xhr.statusText}`)
				}
			}
		}
		xhr.onerror = function () {
			reject('Сетевая ошибка: не удалось выполнить запрос.')
		}
		xhr.timeout = 5000
		xhr.ontimeout = function () {
			reject('Ошибка: истекло время ожидания запроса.')
		}
		xhr.send()
	})
}

nonExistentURL('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => console.log(response))
	.catch(error => alert(error))

// 11.  Сделай запрос на медленный сервер (например, https://httpstat.us/200?sleep=5000) и установи тайм-аут xhr.timeout = 3000.

function slowServer(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url, true)
		xhr.timeout = 3000
		xhr.ontimeout = function () {
			reject('Ошибка: истекло время ожидания запроса.')
		}
		xhr.onerror = function () {
			reject('Сетевая ошибка: не удалось выполнить запрос.')
		}
		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 300) {
				try {
					const contentType = xhr.getResponseHeader('Content-Type')
					if (contentType && contentType.includes('application/json')) {
						const jsonPars = JSON.parse(xhr.responseText)
						resolve(jsonPars)
					} else {
						resolve(xhr.responseText)
					}
				} catch (error) {
					reject('Ошибка при парсинге JSON: ' + error.message)
				}
			} else {
				reject(`Ошибка запроса:${xhr.status},${xhr.statusText}`)
			}
		}

		xhr.send()
	})
}
slowServer('https://httpstat.us/200?sleep=5000')
	.then(response => console.log(response))
	.catch(error => console.error(error))

// 12.  Добавь abort() — отмени запрос через 2 секунды, если ответ не получен.

function checkingAbort(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		const abortTimer = setTimeout(() => {
			xhr.abort()
			reject('Запрос отменён: превышено время ожидания (2 секунды)')
		}, 2000)
		xhr.open('GET', url, true)
		xhr.onerror = function () {
			clearTimeout(abortTimer)
			reject('Сетевая ошибка: не удалось выполнить запрос.')
		}
		xhr.timeout = 5000
		xhr.ontimeout = function () {
			clearTimeout(abortTimer)
			reject('Ошибка: истекло время ожидания запроса.')
		}
		xhr.onload = function () {
			clearTimeout(abortTimer)
			if (xhr.status >= 200 && xhr.status < 300) {
				try {
					const contentType = xhr.getResponseHeader('Content-Type')
					if (contentType && contentType.includes('application/json')) {
						const jsonPars = JSON.parse(xhr.responseText)
					} else {
						resolve(xhr.responseText)
					}
				} catch (error) {
					reject('Ошибка при парсинге JSON: ' + error.message)
				}
			} else {
				reject(`Ошибка запроса:${xhr.status}, ${xhr.statusText}`)
			}
		}
		xhr.send()
	})
}

checkingAbort('https://httpstat.us/200?sleep=1000')
	.then(response => console.log(response))
	.catch(error => console.error(error))
