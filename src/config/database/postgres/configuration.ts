import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  postgres_type: process.env.POSTGRES_TYPE,
  postgres_host: process.env.POSTGRES_HOST,
  postgres_username: process.env.POSTGRES_USERNAME,
  postgres_password: process.env.POSTGRES_PASSWORD,
  postgre_port: process.env.POSTGRES_PORT,
  postgres_database: process.env.POSTGRES_DATABASE,
  postgres_synchronize: process.env.POSTGRES_SYNCHORONIZE,
}));
