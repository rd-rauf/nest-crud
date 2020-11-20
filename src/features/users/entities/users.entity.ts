import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'is_active', default: false })
  isActive: boolean;

  @Column({ name: 'created_on' })
  createdOn: Date;

  @Column({ name: 'updated_on' })
  updatedOn: Date;
}
