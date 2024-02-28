import jwtLibrary from "jsonwebtoken";
import enviroment from "./dotenv.js"

const jwt = {

    sign: (user) => {

        const {_id, role} = user
        const signedToken = jwtLibrary.sign( { _id, role },enviroment.JWT_SECRET, { expiresIn: "24h" } )
        return signedToken;

    },
    verify: async(jwt)=>{

        const decodedData = jwtLibrary.verify(jwt, enviroment.JWT_SECRET);
        return decodedData;

    }

};

export default jwt;