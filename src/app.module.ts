import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PortfolioItem } from './portfolio/portfolio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'portfolio',
      entities: [PortfolioItem],
      synchronize: true,
    }),
    PortfolioModule,
  ],
})
export class AppModule {}
