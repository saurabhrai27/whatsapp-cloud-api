import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import routes from './src/routes/index.js'
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Simple WhatsApp Webhook tester')
})
app.use('/',routes)

app.listen(process.env.LISTENER_PORT, () => {
    console.log(`Server is running on port ${process.env.LISTENER_PORT}`)
})

export default app