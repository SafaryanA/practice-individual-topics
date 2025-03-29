/* 
1.  Написать функцию fetchUser(id), которая получает пользователя по id.
2.  Реализовать fetchAllUsers(), которая загружает список всех пользователей.
3.  Создать функцию fetchWithDelay(url, ms), которая ждёт ms мс перед загрузкой.
4.  Сделать getWeather(city), которая получает погоду по названию города.
5.  Реализовать postData(url, data), которая отправляет JSON-запрос.
6.  Создать функцию fetchWithRetry(url, retries), которая повторяет запрос retries раз в случае ошибки.
7.  Сделать fetchParallel(urls), которая загружает несколько URL одновременно.
8.  Реализовать fetchSequential(urls), которая загружает URL по очереди.
9.  Написать fetchJson(url), которая проверяет, что сервер возвращает JSON.
10. Сделать fetchAbort(url, ms), которая отменяет запрос через ms мс, если ответа нет. 
*/

// 1.  Написать функцию fetchUser(id), которая получает пользователя по id.

async function fetchUser(id) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`
		)
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}
		const user = response.json()
		return user
	} catch (error) {
		console.error('Ошибка при получении пользователя:', error)
		return null
	}
}
fetchUser(1).then(user => console.log(user))

// 2.  Реализовать fetchAllUsers(), которая загружает список всех пользователей.
async function fetchAllUsers(url) {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}
		const users = await response.json()
		return users
	} catch (error) {
		console.error('Ошибка при получении пользователя:', error)
		return null
	}
}
fetchAllUsers('https://jsonplaceholder.typicode.com/users/').then(data =>
	console.log(data)
)
// 3.  Создать функцию fetchWithDelay(url, ms), которая ждёт ms мс перед загрузкой.
async function fetchWithDelay(url, ms) {
	try {
		await new Promise(resolve => setTimeout(resolve, ms))
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}
		const users = await response.json()
		return users
	} catch (err) {
		console.error('Ошибка при получении пользователя:', err)
		return null
	}
}
fetchWithDelay('https://jsonplaceholder.typicode.com/users/', 2000).then(data =>
	console.log(data)
)
// 4.  Сделать getWeather(city), которая получает погоду по названию города.
async function getWeather(city) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/country/${city}`
		)
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}
		const country = await response.json()
		return country
	} catch (err) {
		console.error('Ошибка при получении погоды:', err)
		return null
	}
}
getWeather('USE').then(data => console.log(data.C))
// 5.  Реализовать postData(url, data), которая отправляет JSON-запрос.
async function postData(url, data) {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		if (!response.ok) {
			throw new Error('Ошибка HTTP:', response.status)
		}
		const users = await response.json()
		return users
	} catch (err) {
		console.error('Ошибка при получении пользователя:', err)
		return null
	}
}
postData('https://jsonplaceholder.typicode.com/posts', {
	title: 'foo',
	body: 'bar',
	userId: 1,
}).then(data => console.log(data))
// 6.  Создать функцию fetchWithRetry(url, retries), которая повторяет запрос retries раз в случае ошибки.
async function fetchWithRetry(url, retries) {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}
		const data = await response.json()
		return data
	} catch (error) {
		if (retries !== 0) {
			console.warn(`Попытка повторного запроса... Осталось попыток: ${retries}`)
			return fetchWithRetry(url, retries - 1)
		} else {
			console.error('Запрос не удался после всех попыток:', error)
			return null
		}
	}
}
fetchWithRetry('https://jsonplaceholder.typicode.com/users/', 3).then(data =>
	console.log(data)
)
// 7.  Сделать fetchParallel(urls), которая загружает несколько URL одновременно.
async function fetchParallel(urls) {
	try {
		const responses = await Promise.all(urls.map(url => fetch(url)))
		for (const response in responses) {
			if (!response.ok) {
				throw new Error(`Ошибка HTTP: ${response.status}`)
			}
		}
		return await Promise.all(responses.map(response => response.json()))
	} catch (error) {
		console.error('Ошибка при получении пользователя:', error)
		return null
	}
}
fetchParallel([
	'https://jsonplaceholder.typicode.com/users/',
	'https://jsonplaceholder.typicode.com/users/',
]).then(data => console.log(data))
// 8.  Реализовать fetchSequential(urls), которая загружает URL по очереди.
async function fetchSequential(urls) {
	const result = []
	try {
		for (let url of urls) {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error('Ошибка HTTP: ' + response.status)
			}
			const data = await response.json()
			result.push(data)
		}
	} catch (error) {
		console.error('Ошибка при получении пользователя:', error)
		return null
	}
	return result
}
fetchSequential([
	'https://jsonplaceholder.typicode.com/users/',
	'https://jsonplaceholder.typicode.com/users/',
]).then(data => console.log(data))
// 9.  Написать fetchJson(url), которая проверяет, что сервер возвращает JSON.
async function fetchJson(url) {
	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}
		const contentType = response.headers.get('Content-Type')
		if (!contentType || !contentType.includes('application/json')) {
			throw new Error('Ответ не является JSON')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Ошибка при получении пользователя:', error)
		return null
	}
}
fetchJson('https://jsonplaceholder.typicode.com/users/').then(data =>
	console.log(data)
)
// 10. Сделать fetchAbort(url, ms), которая отменяет запрос через ms мс, если ответа нет.
async function fetchAbort(url, ms) {
	const controller = new AbortController()
	const timeoutId = setTimeout(() => controller.abort(), ms)
	try {
		const response = await fetch(url, { signal: controller.signal })
		clearTimeout(timeoutId)
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`)
		}
		return await response.json()
	} catch (error) {
		if ((error.name = 'AbortError')) {
			console.error('Запрос был отменён из-за тайм-аута.')
		} else {
			console.error('Ошибка при выполнении запроса:', error)
		}
		return null
	}
}
fetchAbort('https://jsonplaceholder.typicode.com/users', 3000).then(data =>
	console.log(data)
)
