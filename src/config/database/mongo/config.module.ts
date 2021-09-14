import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { MongoConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MONGO_SYNCHORONIZE: Joi.boolean().valid(true, false).default(true),
        APP_URL: Joi.string().default('mongodb://localhost/mumez'),
        MONGO_TYPE: Joi.string().default('mongodb'),
        MONGO_USE_UNIFIEDTOPOLOGY: Joi.boolean().default(false),
      }),
    }),
  ],
  providers: [ConfigService, MongoConfigService],
  exports: [ConfigService, MongoConfigService],
})
export class MongoConfigModule {}
