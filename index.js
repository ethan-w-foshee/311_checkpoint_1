const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 4000

const users = require('./routes/users')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('default route')
})

app.use('/users', users)

/* Make sure that the app is running */
app.listen(port, () => {
  console.log('app is listening on:', port)
})