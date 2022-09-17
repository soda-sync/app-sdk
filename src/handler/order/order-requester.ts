import {QueryOrdersResult} from './query-orders-result';
import {QueryOrdersRequest} from './query-orders-request';
import {HttpRequest, HttpResponse} from '../../model';

/** @see AppFeature.orders-provide */
export interface OrderRequester {
  processOrdersRequest(request: HttpRequest): QueryOrdersRequest;

  provideOrders(result: QueryOrdersResult): HttpResponse;
}
