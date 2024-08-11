import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PortfolioItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  clientLink: string;

  @Column()
  status: string; // 'hidden' or 'visible'
}
