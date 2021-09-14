import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class PostgresConfigService {
  constructor(private configService: ConfigService) {}

  get postgres_type(): string {
    return this.configService.get<string>('mongo.postgres_type');
  }
  get postgres_host(): string {
    return this.configService.get<string>('postgres.postgres_host');
  }
  get postgres_username(): string {
    return this.configService.get<string>('postgres.postgres_username');
  }
  get postgres_password(): string {
    return this.configService.get<string>('postgres.postgres_password');
  }

  get postgre_port(): string {
    return this.configService.get<string>('postgres.postgre_port');
  }

  get postgres_database(): string {
    return this.configService.get<string>('postgres.postgres_database');
  }

  get postgres_synchronize(): string {
    return this.configService.get<string>('postgres.postgres_synchronize');
  }
}
