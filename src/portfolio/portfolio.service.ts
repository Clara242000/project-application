import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PortfolioItem } from './portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(PortfolioItem)
    private portfolioRepository: Repository<PortfolioItem>,
  ) {}

  async findAll(): Promise<PortfolioItem[]> {
    return this.portfolioRepository.find();
  }

  async findOne(id: number): Promise<PortfolioItem> {
    return this.portfolioRepository.findOneBy({ id });
  }

  async create(portfolioItem: Partial<PortfolioItem>): Promise<PortfolioItem> {
    const item = this.portfolioRepository.create(portfolioItem);
    return this.portfolioRepository.save(item);
  }

  async update(
    id: number,
    portfolioItem: Partial<PortfolioItem>,
  ): Promise<PortfolioItem> {
    await this.portfolioRepository.update(id, portfolioItem);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.portfolioRepository.delete(id);
  }
}
