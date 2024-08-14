import { Test, TestingModule } from '@nestjs/testing';
import { PortfolioService } from './portfolio.service';
import { PortfolioItem } from '../portfolio-item/portfolio-item.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('PortfolioService', () => {
  let service: PortfolioService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let repository: Repository<PortfolioItem>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PortfolioService,
        {
          provide: getRepositoryToken(PortfolioItem),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PortfolioService>(PortfolioService);
    repository = module.get<Repository<PortfolioItem>>(
      getRepositoryToken(PortfolioItem),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
