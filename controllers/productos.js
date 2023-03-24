const API_URL = 'http://localhost:8080/api'

export const postPedido = async (req, res) => {
  const { cliente, fecha, lugarEntrega, pedidosProducto, precioTotal } =
    req.body

  const response = await fetch(`${API_URL}/pedido`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cliente,
      fecha,
      lugarEntrega,
      pedidosProducto,
      precioTotal,
    }),
  })

  const data = await response.json()

  return res.status(200).json(data)
}

export const deletePedido = async (req, res) => {
  const { id } = req.params
  console.log(id)

  const response = await fetch(`${API_URL}/pedido/${id}`, {
    method: 'DELETE',
  })

  if (response.status === 204) {
    return res.status(204).json({ message: 'Pedido eliminado' })
  }
  return res.status(404).json({ message: 'Pedido no encontrado' })
}
