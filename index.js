const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: "Hello World"
  })
})

const PORT = 5000

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`))