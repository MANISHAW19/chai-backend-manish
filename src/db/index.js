import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB =  async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}` ,)
        console.log(`\n MongoDB connected !! DB host : ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDB connection error :",error);
        process.exit(1);
    }
}

export default connectDB;