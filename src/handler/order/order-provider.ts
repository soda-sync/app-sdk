import {QueryOrdersRequest} from './query-orders-request';
import {QueryOrdersResult} from './query-orders-result';

/** @see AppFeature.orders-request */
export interface OrderProvider {
  queryOrders(request: QueryOrdersRequest): QueryOrdersResult;
}
