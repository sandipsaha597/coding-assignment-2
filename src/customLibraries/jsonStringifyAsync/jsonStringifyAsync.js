const worker = new Worker(new URL('./worker.js', import.meta.url))

const jsonStringifyAsync = (data) => {
  return new Promise((resolve, reject) => {
    worker.onmessage = function (event) {
      resolve(event.data)
    }
    worker.onerror = function (error) {
      console.log(error)
      reject(error)
    }
    worker.postMessage(data)
  })
}

export default jsonStringifyAsync
