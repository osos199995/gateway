import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Gateway } from '../../models/gateway/entities/gateway.entity';

define(Gateway, (faker: typeof Faker) => {
  const gateway = new Gateway();
  gateway.serialNo = faker.random.uuid();
  gateway.name = faker.lorem.word();
  gateway.ipv4 = faker.internet.ip();

  return gateway;
});
