/**
 * The query orders result
 */
import {OrderDto} from '../../model/orders/order-dto';

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
