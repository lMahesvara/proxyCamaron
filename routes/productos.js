import express from 'express'
import { postAlarma, postSensor } from '../controllers/productos'

const router = express.Router()

router.post('/sensores', postSensor)
router.post('/alarmas', postAlarma)

export default router
