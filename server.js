import express from "express"

const PORT = 9000

const app = express()

app.listen(PORT, () => {
    console.log(`Connection made with PORT: ${PORT}`)
})