import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(
            "mongodb://localhost:27017"
        )
        if (connection) {
            console.log("Connection establish")
        }
    } catch (error) {
        console.log("error in connectToDatabase", error)
        throw error
    }
}

export default connectToDatabase