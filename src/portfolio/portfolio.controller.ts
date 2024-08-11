import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PortfolioService } from './portfolio.service'; // Asigură-te că fișierul este la locația corectă
import { PortfolioItem } from '../portfolio-item/portfolio-item.entity'; // Asigură-te că fișierul este la locația corectă

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  create(@Body() portfolioItem: PortfolioItem): Promise<PortfolioItem> {
    return this.portfolioService.create(portfolioItem);
  }

  @Get()
  findAll(): Promise<PortfolioItem[]> {
    return this.portfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PortfolioItem> {
    return this.portfolioService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() portfolioItem: PortfolioItem,
  ): Promise<PortfolioItem> {
    return this.portfolioService.update(id, portfolioItem);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.portfolioService.remove(id);
  }
}
