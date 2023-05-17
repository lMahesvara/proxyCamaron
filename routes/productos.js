import express from 'express'
import { postAlarma, postSensor } from '../controllers/productos'

const router = express.Router()

router.post('/sensor', postSensor)
router.post('/alarma', postAlarma)

export default router
