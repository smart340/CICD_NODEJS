const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: "This is CICD with NodeJS Application!"
  })
})

app.get('/hellow', (req, res) => {
  res.json({
    msg: "Hellow!!"
  })
})

const PORT = 5000

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`))