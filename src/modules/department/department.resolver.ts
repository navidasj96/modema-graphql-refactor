import { Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { Department } from './domain/department';

@Resolver(() => Department)
export class DepartmentResolver {
  constructor(private readonly departmentService: DepartmentService) {}
}
