import { config } from "dotenv";

const appconfig = {
  env: process.env,
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM
  },
  rateLimit: process.env.RATE_LIMIT || 100,
  trustProxy: process.env.TRUST_PROXY === 'true'
};

const SALTROUNDS = 10;

export default appconfig;
export { SALTROUNDS };
