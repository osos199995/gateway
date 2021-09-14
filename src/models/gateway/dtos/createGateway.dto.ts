import { IsIP, IsString } from 'class-validator';

export class CreateGatewayDto {
  @IsString()
  name: string;
  @IsIP()
  ipv4: string;
}
