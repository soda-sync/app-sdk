import {QueryOrdersRequest} from '../model/query-orders-request';
import {RawQueryOrdersResult} from '../model/query-orders-result';

/**
 * Implement this interface for implementing an api which can provide orders.
 *
 * @see AppFeature
 */
export interface OrderProvider {
    /**
     * Handle the request and return the queried orders in a unified form.
     */
    queryOrders(request: QueryOrdersRequest): Promise<RawQueryOrdersResult>;
}
