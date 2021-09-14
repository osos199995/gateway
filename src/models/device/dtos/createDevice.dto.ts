import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DeviceStatusEnum } from '../enum/deviceStatus.enum';

export class CreateDeviceDto {
  @IsString()
  gatewayId: string;
  @IsString()
  @IsNotEmpty()
  vendor: string;
  @IsEnum(DeviceStatusEnum)
  status: string;
}
