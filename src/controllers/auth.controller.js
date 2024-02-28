import bcryptjs from "bcryptjs";
import User from "../models/users.model.js"
import jwt from "../config/jwt.js";

const authControllers = {

    register: async(req,res) => {

        try {

            const body = req.body;
            const hashPassword = await bcryptjs.hash(body.password, 10);

            const userEmail = body.email;
            if( User.findOne({email:userEmail}) ){ res.status(300).redirect("/registro") };
    
            const userBody = new User({
                ...body, 
                password:hashPassword
            })
    
            const user = await User.create(userBody);
            res.status(200).json({payload:user, message:"User Registered!"});

        } catch (error) { res.status(400).json(error.message) }
    },

    login: async(req, res) => {

        try {

            const body = req.body;

            const user = await User.findOne({email:body.email});
            if(!user){ throw new Error("User Doesn't Exist") };
    
            const verifyPassword = bcryptjs.compare(body.password, user.password);
            if(!verifyPassword){ throw new Error("Incorrect Password") };

            const userToken = jwt.sign(user);
            if(!userToken){ throw new Error("Error to Log User") }

            res.status(200).json({payload:`Bearer ${userToken}`, message:"Token Created!"})

        } catch (error) { res.status(400).json(error) }
    },

    getOneUser: async(req, res) => {

        try {

            const user = await req.user;
            res.status(200).json({payload:user, message:"User data Getted!"});
            
        } catch (error) { res.status(400).json(error) }

    },

    acceptCertificate: async(req, res) => {

        try {

            const user = await req.user;
            const accept = await User.findByIdAndUpdate({ _id:user._id }, { certificate:true })

            if(!accept){
                throw new Error("Error to accept health certificate")
            };

            res.status(200).json({payload:true, message:"Health Certificate Accepted" })
            
        } catch (error) { res.status(400).json(error) }

    }


}

export default authControllers;