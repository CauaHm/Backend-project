import express from 'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js'
import { config } from 'dotenv'

config()

async function main () {
    const hostname = process.env.HOST_NAME
    const port = process.env.PORT

    const app = express()

    const mongoConnection = await Mongo.connect({ mongoConnectionString: process.env.MONGO_CS, mongoDbName: process.env.MONGO_DB_NAME })
    console.log(mongoConnection)

    app.use(express.json())
    app.use(cors())

    app.get('/', (req, res) => {
        res.send({
            sucess: true,
            body: 'Welcome to MyGastonomy'
        })
        res.status(200)
    })

    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port} `)
    })
}

main()