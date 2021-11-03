import express from 'express'
import get from './api/get.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const promise = get('houses/1')
  promise.then(data => res.send(data))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
