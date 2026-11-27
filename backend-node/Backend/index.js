import express from 'express'
import { sequelize } from './database.js'
import { produtoRoutes } from './routes/produtoRoutes.js'
import { livroRoutes } from './routes/livroRoutes.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use("/produtos", produtoRoutes)

app.use("/livros", livroRoutes)

async function iniciar() {
    try {
        await sequelize.sync()
        app.listen(3000, () => {
            console.log("Servidor rodando em http://localhost:3000")
        })
    } catch (erro) {
        console.error(erro.messege)
    } 
}

iniciar()