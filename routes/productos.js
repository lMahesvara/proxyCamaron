import express from 'express'
import { deletePedido, postPedido } from '../controllers/productos.js'

const router = express.Router()

router.post('/pedido', postPedido)
router.delete('/pedido/:id', deletePedido)

export default router
