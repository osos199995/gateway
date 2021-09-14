import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Gateway } from '../../models/gateway/entities/gateway.entity';

export default class create implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Gateway)().createMany(2);
  }
}
