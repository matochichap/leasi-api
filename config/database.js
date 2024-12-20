import { connect } from "mongoose"
import { config } from "dotenv"

config()
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.6bylk.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = async () => {
    try {
        await connect(MONGODB_URI)
        console.log("MongoDB connected")
    } catch (err) {
        console.error("Failed to connect to MongoDB", err)
        process.exit(1)
    }
}

export default connectDB
