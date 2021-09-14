import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { MongoConfigModule } from '../../../config/database/mongo/config.module';
import { MongoConfigService } from '../../../config/database/mongo/config.service';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MongoConfigModule],
      useFactory: async (mongoConfigService: MongoConfigService) => ({
        type: mongoConfigService.mongo_type as DatabaseType,
        logging: true,
        url: mongoConfigService.mongo_url,
        useUnifiedTopology: mongoConfigService.mongo_useUnifiedTopology,
        synchronize: mongoConfigService.mongo_synchronize,
        entities: [
          __dirname + '/../../../models/**/entities/*{.entity.ts,.entity.js}',
        ],
      }),
      inject: [MongoConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class MongoDatabaseProviderModule {}
