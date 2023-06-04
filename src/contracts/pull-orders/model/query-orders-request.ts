import {Filter, Join, NestedProperties} from '../../../sdk/types';
import {OrderDto} from "../../orders/order-dto";

/**
 * A request object for querying orders.
 */
export interface QueryOrdersRequest {
  /**
   * The token of the queried page.
   * To request the first page, set it to null.
   */
  pageToken?: string;

  /**
   * The page size
   * Must be >0
   */
  pageSize: number;

  /**
   * The filters to apply for query the orders
   */
  filters: Filter<OrderDto, Join<NestedProperties<OrderDto>, '.'>>[]

  /**
   * Custom data
   */
  attributes?: { [key: string]: any },
}
