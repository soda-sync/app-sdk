import {OrderDto} from '../../model';

/**
 * The query orders result
 */
export interface QueryOrdersResult {
  /**
   * The requested page.
   * Must be >=1
   */
  page: number;

  /**
   * The page size
   * Must be >0
   */
  pageSize: number;

  /**
   * The total number of pages.
   * Must be >=0
   */
  totalPages: number;

  /**
   * The total count of orders.
   * Must be >=0
   */
  totalCount: number;

  /**
   * The orders.
   */
  data: OrderDto[];
}
