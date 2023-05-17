import express from 'express'
import cors from 'cors'
import router from './routes/productos.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(8800)

console.log('Server running on port 8800')
