const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, console.log('Server on 🔥'))