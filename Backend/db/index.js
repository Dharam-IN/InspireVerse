import mongoose from "mongoose";

const ConnectDB = () => {
    try {
        mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
        console.log("Database Connected")
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDB;