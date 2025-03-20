<<<<<<< HEAD




const register = async () => {
  console.log('fuck');

}

export default register;
=======
import jwt from "jsonwebtoken";
import errorHandler from "../utils/errorHandler.js";
import prisma_db from "../prisma/db.js";


const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.query;
    console.log(username)
    if (await prisma_db.findUser(username)) {
      res.status(400).json({
        message: 'Username is used 55',
      })
      throw new errorHandler.ValidationError("Existing username");
    }
    const newUser = prisma_db.addUser(username, email, password);
    res.status(200).json({
      message: "User added successfully",
      user: newUser
    })
  } catch (error) {
    console.log(error);
  };
}

const login = async (req, res, next) => {

}
const logout = async (req, res, next) => {

}

export default {
  register,
  login,
  logout
}

register()
>>>>>>> branch_Nodejs
