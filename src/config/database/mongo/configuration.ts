import { registerAs } from '@nestjs/config';

export default registerAs('mongo', () => ({
  mongo_type: process.env.MONGO_TYPE,
  mongo_url: process.env.MONGO_URL,
  mongo_synchronize: process.env.MONGO_SYNCHORONIZE,
  mongo_useUnifiedTopology: process.env.MONGO_USE_UNIFIEDTOPOLOGY,
}));
