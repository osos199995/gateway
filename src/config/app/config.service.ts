import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get name(): string {
    return this.configService.get<string>('app.name');
  }
  get env(): string {
    return this.configService.get<string>('app.env');
  }
  get url(): string {
    return this.configService.get<string>('app.url');
  }
  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }
  get jwt_expires(): number {
    return Number(this.configService.get<number>('app.jwt_expires'));
  }
  get jwt_secret(): string {
    return this.configService.get<string>('app.jwt_secret');
  }
}
