import {QueryOrderRequest} from "../model/query-single-order-request";
import {RawOrderDto} from "../../orders/order-dto";

/**
 * Implement this interface for implementing an api which can provide a single order.
 *
 * @see AppFeature
 */
export interface SingleOrderProvider {
    /**
     * Handle the request and return the queried orders in a unified form.
     */
    queryOrder(request: QueryOrderRequest): Promise<RawOrderDto | null>;
}
