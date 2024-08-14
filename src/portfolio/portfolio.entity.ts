import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PortfolioItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ default: true })
  isVisible: boolean;

  @Column({ nullable: true })
  clientLink?: string;
}
