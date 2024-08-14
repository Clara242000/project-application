import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioItem } from './portfolio.entity';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  findAll(): Promise<PortfolioItem[]> {
    return this.portfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PortfolioItem> {
    return this.portfolioService.findOne(id);
  }

  @Post()
  create(
    @Body() portfolioItem: Partial<PortfolioItem>,
  ): Promise<PortfolioItem> {
    return this.portfolioService.create(portfolioItem);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() portfolioItem: Partial<PortfolioItem>,
  ): Promise<PortfolioItem> {
    return this.portfolioService.update(id, portfolioItem);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.portfolioService.remove(id);
  }
}
