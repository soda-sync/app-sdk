import {HttpRequest} from '../../../bindings/http/http-request';
import {HttpResponse} from '../../../bindings/http/http-response';
import {OrderDto} from "../model/order-dto";
import {QueryOrderRequest} from "./query-single-order-request";

/**
 * Implement this interface for implementing an api which requests single orders.
 *
 * @see AppFeature
 */
export interface SingleOrderRequester {

    /**
     * Handle the incoming request and transform it to a QueryOrderRequest.
     */
    processSingleOrderRequest(request: HttpRequest): Promise<QueryOrderRequest>;

    /**
     * Transform the result to the expected response.
     */
    provideSingleOrder(result: OrderDto | null): Promise<HttpResponse>;
}
