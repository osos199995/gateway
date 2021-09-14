import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  name: process.env.APP_NAME,
  url: process.env.APP_URL,
  port:
    process.env.APP_ENV === 'development'
      ? process.env.APP_PORT
      : process.env.APP_ENV === 'test'
      ? process.env.APP_TEST_PORT
      : process.env.APP_PORT,
  jwt_expires: process.env.JWT_EXPIRES,
  jwt_secret: process.env.JWT_SECRET,
}));
