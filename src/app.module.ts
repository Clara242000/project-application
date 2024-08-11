import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PortfolioItem } from './portfolio-item/portfolio-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [PortfolioItem],
      synchronize: true,
    }),
    PortfolioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
