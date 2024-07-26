self.onmessage = function (event) {
  // const dateStart = Date.now()
  // const a = true
  // while (a) {
  //   if (dateStart + 1000 * 60 * 5 < Date.now()) break
  // }
  const data = event.data
  const start = Date.now()

  const jsonString = JSON.stringify(data)
  console.log('worker creation', Date.now() - start)

  self.postMessage(jsonString)
}
