import {Nullable} from '../../types';
import {OrderDto} from '../../model/orders/order-dto';

/**
 * The query orders result
 */
export interface QueryOrdersResult {
  /**
   * The token of the requested page.
   */
  pageToken?: Nullable<string>;

  /**
   * The page size
   * Must be >0
   */
  pageSize: number;

  /**
   * The token of the next page.
   * If there is no next page, leave it empty.
   */
  nextPageToken?: Nullable<string>;

  /**
   * The orders.
   */
  data: OrderDto[];
}
