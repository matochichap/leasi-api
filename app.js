import express, { json } from "express"
import { config } from "dotenv"
import connectDB from "./config/database.js"
import orderRoutes from "./routes/orderRoutes.js"

config()
connectDB()

const port = process.env.PORT
const app = express()

app.use(json())
app.use("/api", orderRoutes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
