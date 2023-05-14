import {QueryOrderRequest} from "./query-single-order-request";
import {OrderDto} from "../model/order-dto";

/**
 * Implement this interface for implementing an api which can provide a single order.
 *
 * @see AppFeature
 */
export interface SingleOrderProvider {
    /**
     * Handle the request and return the queried orders in a unified form.
     */
    queryOrder(request: QueryOrderRequest): Promise<OrderDto | null>;
}
