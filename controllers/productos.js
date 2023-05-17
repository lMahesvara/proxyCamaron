import axios from 'axios'

import https from 'https'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const agent = new https.Agent({
  rejectUnauthorized: false,
})

const API_URL = 'https://localhost:8443'

export const postSensor = async (req, res) => {
  const { identificador, modelo, zona } = req.body
  const token = req.headers['auth']

  const res = await axios.post(
    `${API_URL}/sensores`,
    {
      identificador,
      modelo,
      zona,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        auth: token,
      },
      httpsAgent: agent,
    }
  )

  if (response.status === 201) {
    return res.status(201).json({ message: 'Sensor creado' })
  }

  return res.status(500).json({ message: 'Error al crear el sensor' })
}

export const postAlarma = async (req, res) => {
  const { tipo, limiteInferior, limiteSuperior } = req.body
  const token = req.headers['auth']

  const res = await axios.post(
    `${API_URL}/alarmas`,
    {
      tipo,
      limiteInferior,
      limiteSuperior,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        auth: token,
      },
      httpsAgent: agent,
    }
  )

  if (response.status === 201) {
    return res.status(201).json({ message: 'Alarma creada' })
  }

  return res.status(500).json({ message: 'Error al crear la alarma' })
}
