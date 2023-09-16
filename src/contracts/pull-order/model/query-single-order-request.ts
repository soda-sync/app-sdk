import {Filter, Join, NestedPropertiesRecursive} from '../../../sdk/types';
import {OrderDto} from "../../orders/order-dto";

/**
 * A request object for querying a single order.
 */
export interface QueryOrderRequest {
    /**
     * The filters to apply for query the order
     */
    filters: Filter<Join<NestedPropertiesRecursive<OrderDto>, '.'>>[]

    /**
     * Custom data
     */
    attributes?: { [key: string]: any },
}
