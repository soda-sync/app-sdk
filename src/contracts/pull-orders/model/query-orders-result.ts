import {OrderDto} from "../../orders/order-dto";
import {QueryResult} from "../../common/model/query-result";

/**
 * The query orders result
 */
export type QueryOrdersResult = QueryResult<OrderDto>;
