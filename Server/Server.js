const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const userRouter = require('./Routes/auth.routes')
const Database = require('./Config/db')


dotenv.config()
Database()

const app = express()

app.use('/user', userRouter)



app.listen(3000)