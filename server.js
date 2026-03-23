import "./config.js"
import express from "express"
import { reviewsRouter } from "./review_retrieval/retrieveReviews.js"
import pool from "./db.js"

const PORT = 9000

const app = express()

app.get("/test-db", async (req, res) =>{
    try
    {
        console.log("trying test-db")
        console.log("DB URL:", process.env.DATABASE_URL)
        const result = await pool.query("SELECT 1 as test")
        res.json(result.rows)
    }
    catch (err)
    {
        console.error(err)
        res.status(500).send("DB Error")
    }
})

app.listen(PORT, () => {
    console.log(`Connection made with PORT: ${PORT}`)
})