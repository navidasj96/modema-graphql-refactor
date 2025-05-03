import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { Query } from '@ptc-org/nestjs-query-core';

@Injectable()
export class InvoiceService extends TypeOrmQueryService<Invoice> {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
  ) {
    super(invoiceRepository);
  }

  override async query(query: Query<Invoice>): Promise<Invoice[]> {
    const qb = this.invoiceRepository.createQueryBuilder('invoice');

    // Apply filters from the query
    if (query.filter) {
      // Apply your filter logic here
    }

    // Apply sorting
    if (query.sorting) {
      for (const sort of query.sorting) {
        if (typeof sort.field === 'string') {
          qb.leftJoin('invoice.user', 'user');
          qb.addOrderBy('user.name', sort.direction);
        } else {
          qb.addOrderBy(`invoice.${sort.field as string}`, sort.direction);
        }
      }
    }

    // Apply paging
    if (query.paging) {
      if (query.paging.limit) {
        qb.limit(query.paging.limit);
      }
      if (query.paging.offset) {
        qb.offset(query.paging.offset);
      }
    }

    return qb.getMany();
  }
}
