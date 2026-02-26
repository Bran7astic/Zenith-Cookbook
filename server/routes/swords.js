import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import swordsData from '../data/swords.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(swordsData)
})

router.get('/:swordId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/sword.html'))
})

export default router