import {QueryOrdersResult} from './query-orders-result';
import {QueryOrdersRequest} from './query-orders-request';
import {HttpRequest, HttpResponse} from '../../model';

/**
 * Implement this interface for implementing an api which requests orders.
 *
 * @see AppFeature
 */
export interface OrderRequester {

  /**
   * Handle the incoming request and transform it to a QueryOrdersRequest.
   */
  processOrdersRequest(request: HttpRequest): QueryOrdersRequest;

  /**
   * Transform the result to the expected response.
   */
  provideOrders(result: QueryOrdersResult): HttpResponse;
}
