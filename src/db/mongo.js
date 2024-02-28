import { connect } from "mongoose";
import enviroment from "../config/dotenv.js"

const connectMongo = async() => {

    try {

        await connect(enviroment.DB_URL);
        console.log("Database Connected!")
        
    } catch (err) {
        console.log("Connection Failed!", err)
    }

}

export default connectMongo;