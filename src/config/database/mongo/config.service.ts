import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MongoConfigService {
  constructor(private configService: ConfigService) {}

  get mongo_type(): string {
    return this.configService.get<string>('mongo.mongo_type');
  }
  get mongo_url(): string {
    return this.configService.get<string>('mongo.mongo_url');
  }
  get mongo_synchronize(): boolean {
    return this.configService.get<boolean>('mongo.mongo_synchronize');
  }
  get mongo_useUnifiedTopology(): boolean {
    return this.configService.get<boolean>('mongo.mongo_useUnifiedTopology');
  }
}
