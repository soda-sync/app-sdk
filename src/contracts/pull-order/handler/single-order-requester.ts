import {HttpRequest} from '../../../bindings/http/http-request';
import {RawHttpResponse} from '../../../bindings/http/http-response';
import {RawQueryOrderRequest} from "../model/query-single-order-request";
import {OrderDto} from "../../orders/order-dto";

/**
 * Implement this interface for implementing an api which requests single orders.
 *
 * @see AppFeature
 */
export interface SingleOrderRequester {

    /**
     * Handle the incoming request and transform it to a QueryOrderRequest.
     */
    processSingleOrderRequest(request: HttpRequest): Promise<RawQueryOrderRequest>;

    /**
     * Transform the result to the expected response.
     */
    provideSingleOrder(result: OrderDto | null): Promise<RawHttpResponse>;
}
