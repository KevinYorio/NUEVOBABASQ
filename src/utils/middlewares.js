import jwt from "../config/jwt.js";
import User from "../models/users.model.js";

const middlewares = {

    verifyToken: async(req, res ,next) => {

        try {

            const token = req.headers.authorization?.split(' ')[1];

            if(!token){ throw new Error("Token invalido")};
    
            const tokenData = await jwt.verify(token);
            const userId = tokenData._id

            const user = await User.findOne( {_id:userId} ).populate("reserves");
            if(!user){ throw new Error("User Doesn't exist") };

            req.user = user;
            next();
            
        } catch (error) { res.status(400).json(error) }

    }
    
}

export default middlewares;