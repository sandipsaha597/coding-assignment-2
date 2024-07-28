self.onmessage = function (event) {
  // const dateStart = Date.now()
  // const a = true
  // while (a) {
  //   if (dateStart + 1000 * 60 * 5 < Date.now()) break
  // }
  const data = event.data

  const jsonString = JSON.stringify(data)

  self.postMessage(jsonString)
}
