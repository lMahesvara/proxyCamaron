import express from 'express'
import { postAlarma, postSensor } from '../controllers/productos.js'

const router = express.Router()

router.post('/sensores', (req, res) => {
  postSensor(req, res)
})
router.post('/alarmas', (req, res) => {
  postAlarma(req, res)
})

export default router
