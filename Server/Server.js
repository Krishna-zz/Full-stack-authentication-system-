const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors  = require('cors')
const authRoutes = require('./Routes/auth.routes')
const Connect_To_DB = require('./Config/db')


dotenv.config()
Connect_To_DB()
const app = express()


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/', authRoutes)



app.listen(5000)
