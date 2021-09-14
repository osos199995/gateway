import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Device extends BaseEntity {
  @ObjectIdColumn({ type: 'uuid', primary: true })
  _id: string;
  @Column()
  vendor: string;
  @Column({ default: 'now' })
  dateCreated: string;
  @Column()
  status: string;
  @Column()
  gatewayId: string;
}
