import {QueryOrdersResult} from '../model/query-orders-result';
import {QueryOrdersRequest} from '../model/query-orders-request';
import {HttpRequest} from '../../../bindings/http/http-request';
import {HttpResponse} from '../../../bindings/http/http-response';

/**
 * Implement this interface for implementing an api which requests orders.
 *
 * @see AppFeature
 */
export interface OrderRequester {

  /**
   * Handle the incoming request and transform it to a QueryOrdersRequest.
   */
  processOrdersRequest(request: HttpRequest): Promise<QueryOrdersRequest>;

  /**
   * Transform the result to the expected response.
   */
  provideOrders(result: QueryOrdersResult): Promise<HttpResponse>;
}
