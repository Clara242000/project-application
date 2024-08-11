import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PortfolioItem } from '../portfolio-item/portfolio-item.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(PortfolioItem)
    private portfolioRepository: Repository<PortfolioItem>,
  ) {}

  create(portfolioItem: PortfolioItem): Promise<PortfolioItem> {
    return this.portfolioRepository.save(portfolioItem);
  }

  findAll(): Promise<PortfolioItem[]> {
    return this.portfolioRepository.find();
  }

  findOne(id: number): Promise<PortfolioItem> {
    return this.portfolioRepository.findOneBy({ id });
  }

  async update(
    id: number,
    portfolioItem: PortfolioItem,
  ): Promise<PortfolioItem> {
    await this.portfolioRepository.update(id, portfolioItem);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.portfolioRepository.delete(id);
  }
}
