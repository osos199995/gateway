import { EntityRepository, Repository } from 'typeorm';
import { Gateway } from './entities/gateway.entity';

@EntityRepository(Gateway)
export class GatewayRepository extends Repository<Gateway> {
  findGatewayById(id: string): Promise<Gateway> {
    return this.findOne(id);
  }
  deleteGateway(id: string): void {
    this.delete(id);
  }
  findGateways(): Promise<Gateway[]> {
    return this.find();
  }
  createGateway(gateway: Gateway): Promise<Gateway> {
    return this.save(gateway);
  }
}
