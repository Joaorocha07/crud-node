import { connection } from "../models/connection.js"

export const getUsers = (_, res) => {
    const sql = "SELECT * FROM usuarios"

    connection.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}