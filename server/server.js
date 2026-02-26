import express from 'express'
const app = express() // instantiate express
import swordsRouter from './routes/swords.js'

app.use('/public', express.static('./public'))

app.use('/swords', swordsRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Zenith Cookbook API</h1>')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})