import pkg from "pg"
const { Pool } = pkg

console.log("ESTABLISHING POOL WITH DB URL:", process.env.DATABASE_URL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

export default pool