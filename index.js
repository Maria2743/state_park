import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import skatersRouter from './routes/skaters.route.js'

const app = express()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//Configuración de rutas
app.use('api/v1/skaters', skatersRouter)
app.use('*', (req, res) => {
    res.status(404).json({ ok: false, msg: 'ruta no configurada 404' })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor esta andando en http://localhost:${PORT}`)
})