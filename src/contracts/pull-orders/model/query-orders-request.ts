import {Filter, Join, NestedProperties} from '../../../sdk/types';
import {OrderDto} from "../../orders/order-dto";
import {QueryRequest} from "../../common/model/query-request";

/**
 * A request object for querying orders.
 */
export interface QueryOrdersRequest extends QueryRequest {
    /**
     * The filters to apply for query the orders
     */
    filters: Filter<OrderDto, Join<NestedProperties<OrderDto>, '.'>>[]
}
