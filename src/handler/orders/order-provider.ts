import {QueryOrdersRequest} from './query-orders-request';
import {QueryOrdersResult} from './query-orders-result';

/**
 * Implement this interface for implementing an api which can provide orders.
 *
 * @see AppFeature
 */
export interface OrderProvider {
  /**
   * Handle the request and return the queried orders in a unified form.
   */
  queryOrders(request: QueryOrdersRequest): Promise<QueryOrdersResult>;
}
