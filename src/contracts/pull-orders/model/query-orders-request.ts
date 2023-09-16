import {Filter, Join, NestedPropertiesRecursive} from '../../../sdk/types';
import {OrderDto} from "../../orders/order-dto";
import {QueryRequest} from "../../common/model/query-request";

/**
 * A request object for querying orders.
 */
export interface QueryOrdersRequest extends QueryRequest {
    /**
     * The filters to apply for query the orders
     */
    filters: Filter<Join<NestedPropertiesRecursive<OrderDto>, '.'>>[]
}
