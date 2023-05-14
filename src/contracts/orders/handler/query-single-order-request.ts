import {Filter, Join, NestedProperties} from '../../../sdk/types';
import {OrderDto} from "../model/order-dto";

/**
 * A request object for querying a single order.
 */
export interface QueryOrderRequest {
    /**
     * The filters to apply for query the order
     */
    filters: Filter<OrderDto, Join<NestedProperties<OrderDto>, '.'>>[]

    /**
     * Custom data
     */
    attributes?: { [key: string]: any },
}
