import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { PostgresConfigService } from './config.service';
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
        POSTGRES_TYPE: Joi.string().default('postgres'),
        POSTGRES_HOST: Joi.string().default('localhost'),
        POSTGRES_USERNAME: Joi.string().default('postgres'),
        POSTGRES_PASSWORD: Joi.string().default('123456'),
        POSTGRES_PORT: Joi.number().default(5432),
        POSTGRES_DATABASE: Joi.string(),
        POSTGRES_SYNCHORONIZE: Joi.boolean().default(true),
      }),
    }),
  ],
  providers: [ConfigService, PostgresConfigService],
  exports: [ConfigService, PostgresConfigService],
})
export class PostgresConfigModule {}
