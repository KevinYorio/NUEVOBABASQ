import Reserve from "../models/reserves.model.js"
import User from "../models/users.model.js";

const reserveControllers = {

    createOne: async (req, res) => {

        try {

          const { _id } = req.user;
          const body = req.body;

          console.log(body)
          
          const reserveBody = {
            ...body,
            user: _id,
            times: body.times, // Asegúrate de que 'times' está presente en el body
          };
      
          const reserve = await Reserve.create(reserveBody);

          const user = await User.findById(_id);
          user.reserves.push(reserve._id);

          user.save();
      
          res.status(201).json({ payload:reserve, message:"Reserve Created!" });

        } catch (error) { res.status(400).json(error) }

    }
    
};

export default reserveControllers;