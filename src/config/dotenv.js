import { config } from "dotenv";

config();

const enviroment ={

    DB_URL:process.env.DB_URL,
    JWT_SECRET:process.env.JWT_SECRET

}

export default enviroment;


