import jwt from "jsonwebtoken"
import errorHandler from "../utils/errorHandler";
import config from "../config/config";
import prisma_db from "../prisma/db";

const refreshTokenMiddleware = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      throw new errorHandler.UnauthorizedError("No refresh token");
    }

    const decoded = jwt.verify(refreshToken, config.jwtRefreshSecret);
    const user = await prisma_db.findUser(decoded.userId);

    if (!user) {
      throw new errorHandler.ValidationError("User not found");
    }

    const newAccessToken = generateToken({
      userId: user.id,
      role: user.role || "civilian"
    }).accessToken;

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure,
      sameSite: "Strict",
      maxAge: config.jwtExpiresIn * 1000
    });

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      next(new errorHandler.UnauthorizedError("Refresh token expired"));
    } else if (error instanceof jwt.JsonWebTokenError) {
      next(new errorHandler.InvalidTokenError("Invalid token"));
    } else {
      next(error);
    }
  }
};
const revokeToken = await (req, res, next) => {
  try {

  } catch (error) {
    next(new errorHandler.UnauthorizedError("Your token is revoked"));
  }
}

export default refreshTokenMiddleware;
