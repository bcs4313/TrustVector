import dotenv from "dotenv"

dotenv.config({path: "secrets.env"})

const API_KEY = process.env.GOOGLE_API_KEY
const DATABASE_URL = process.env.DATABASE_URL
console.log(API_KEY)
console.log(DATABASE_URL)