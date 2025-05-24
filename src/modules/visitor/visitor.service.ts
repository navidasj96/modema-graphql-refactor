import { Injectable } from '@nestjs/common';
import { CreateVisitorInput } from './dto/create-visitor.input';
import { UpdateVisitorInput } from './dto/update-visitor.input';
import { Visitor } from '@/modules/visitor/entities/visitor.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VisitorService {
  constructor(
    /**
     * inject visitorRepository
     */
    @InjectRepository(Visitor)
    private readonly visitorRepository: Repository<Visitor>
  ) {}
  create(createVisitorInput: CreateVisitorInput) {
    return 'This action adds a new visitor';
  }

  findAll() {
    return `This action returns all visitor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visitor`;
  }

  update(id: number, updateVisitorInput: UpdateVisitorInput) {
    return `This action updates a #${id} visitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} visitor`;
  }
  async save(visitor: Visitor, manager?: EntityManager) {
    const repository = manager
      ? manager.getRepository(Visitor)
      : this.visitorRepository;
    return await repository.save(visitor);
  }
}
