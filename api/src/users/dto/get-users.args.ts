import {
  ArgsType,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { SortOrder } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { User, UserEntAB } from '../entities/user.entity';

@ObjectType()
export class UserPaginator {
  data: User[];
  paginatorInfo: PaginatorInfo;
}

@ArgsType()
export class GetUsersArgs extends PaginationArgs {
  orderBy?: QueryUsersOrderByOrderByClause[];
  text?: string;
}

@ArgsType()
export class GetAccArgs extends PaginationArgs {
  orderBy?: QueryUsersOrderByOrderByClause[];
  text?: string;
  id?: string;
}

@InputType()
export class QueryUsersOrderByOrderByClause {
  column: QueryUsersOrderByColumn;
  order: SortOrder;
}
export enum QueryUsersOrderByColumn {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME',
  UPDATED_AT = 'UPDATED_AT',
}

registerEnumType(QueryUsersOrderByColumn, {
  name: 'QueryUsersOrderByColumn',
});

@ObjectType()
export class AccountPaginator {
  data: UserEntAB[];
  paginatorInfo: PaginatorInfo;
}
