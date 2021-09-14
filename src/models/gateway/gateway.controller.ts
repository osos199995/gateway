import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { Gateway } from './entities/gateway.entity';
import { CreateGatewayDto } from './dtos/createGateway.dto';

@Controller('gateways')
export class GatewayController {
  constructor(private gatewayService: GatewayService) {}

  @Get()
  findGateways(): Promise<Gateway[]> {
    return this.gatewayService.findGateways();
  }

  @Get(':id')
  findGatewayById(@Param('id') id: string): Promise<Gateway> {
    return this.gatewayService.findGatewayById(id);
  }

  @Post()
  async create(@Body() createGatewayDto: CreateGatewayDto): Promise<Gateway> {
    return this.gatewayService.createGateways(createGatewayDto);
  }

  @Delete(':id')
  deleteGateway(@Param('id') id: string): void {
    return this.gatewayService.deleteGateway(id);
  }
}
