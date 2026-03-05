import { pool } from "../config/database.js";

const getSwords = async (req, res) => {
    
    const results = await pool.query('SELECT * FROM swords ORDER BY id ASC')
    
    try {
        res.status(200).json(results.rows)
    } catch (err) {
        res.status(409).json( {error: err.message} )
    }
}

export default {getSwords}