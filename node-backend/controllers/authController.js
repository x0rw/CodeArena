import jwt from "jsonwebtoken";
import errorHandler from "../utils/errorHandler.js";
import prisma_db from "../prisma/db.js";
import config from "../config/config.js";

const generateToken = (payload) => {
  const accessToken = jwt.sign(payload, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });

  const refreshToken = jwt.sign(payload, config.jwtRefreshSecret, {
    expiresIn: config.jwtRefreshExpiresIn,
  });

  return { accessToken, refreshToken };
};

const setAuthCookies = (res, accessToken, refreshToken) => {
  const cookieOptions = {
    httpOnly: true,
    secure,
    sameSite: "Strict",
    path: "/",
  };

  res.cookie("accessToken", accessToken, {
    ...cookieOptions,
    maxAge: config.jwtExpiresIn * 1000, // milliseconds
  });

  res.cookie("refreshToken", refreshToken, {
    ...cookieOptions,
    maxAge: config.jwtRefreshExpiresIn * 1000,
  });
};

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All field required"
      })
    }
    const existingUser = await prisma_db.findUser(username);
    if (existingUser) {
      return res.status(409).json({
        message: "Username is already used",
      });
    }
    //throw new errorHandler.ValidationError("Existing username");

    const newUser = await prisma_db.addUser(username, email, password);
    if (!newUser) {
      return res.status(500).json({
        message: "Failed to create user",
      });
    }

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(new errorHandler.ValidationError(error.message));
  };
}

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new errorHandler.ValidationError("Username and password are required");
    }

    const user = await prisma_db.checkUser(username, password);
    if (!user) {
      throw new errorHandler.ValidationError("Invalid Informations");
    }

    const payload = {
      username: user.username,
      privilige: user.role || "civilian",
    }
    const { accessToken, refreshToken } = generateToken(payload)

    setAuthCookies(res, accessToken, refreshToken)

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
    // redirect home page or dashboard

  } catch (error) {
    next(new errorHandler.ValidationError(error.message));
  }

}

export default {
  register,
  login
};
