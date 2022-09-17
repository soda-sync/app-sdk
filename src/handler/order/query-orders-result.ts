import {OrderDto} from '../../model';

export interface QueryOrdersResult {
  page: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  data: OrderDto[];
}
