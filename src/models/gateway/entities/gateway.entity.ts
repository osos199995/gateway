import { BaseEntity, Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Gateway extends BaseEntity {
  @ObjectIdColumn({ type: 'uuid', primary: true })
  _id: string;
  @Column({ unique: true })
  serialNo: string;
  @Column()
  name: string;
  @Column()
  ipv4: string;
}
