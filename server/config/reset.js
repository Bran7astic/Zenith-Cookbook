import './dotenv.js'
import { pool } from "./database.js";
import swordsData from "../data/swords.js";

const createSwordsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS swords;

        CREATE TABLE IF NOT EXISTS swords (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            damage INT NOT NULL,
            image VARCHAR(255) NOT NULL,
            tooltip TEXT NOT NULL,
            gif VARCHAR(255) NOT NULL
        )

    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 Created Swords Table Successfully!')
    } catch(err) {
        console.error(`⚠️ error creating swords table: ${err}`)
    }
}

const seedGiftsTable = async () => {
    await createSwordsTable()

    swordsData.forEach((sword) => {
        const insertQuery = {
            text: 'INSERT INTO swords (name, damage, image, tooltip, gif) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            sword.name,
            sword.damage,
            sword.image,
            sword.tooltip,
            sword.gif
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting swords:', err)
                return
            }

            console.log(`✅ ${sword.name} added successfully!`)
        })
    })
}

seedGiftsTable()