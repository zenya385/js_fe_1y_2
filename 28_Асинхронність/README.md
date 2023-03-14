# Асинхронність

Java script - синхронний однопоточний

Асинхронність у Java script:
 - Зворотні виклики (callback)
 - Асинхроний код
 - Promise / Проміси
 - Async / Await


// Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);
 window.setTimeout()
 window.setInterval()

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);
