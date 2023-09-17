import {Filter, Join, NestedProperties, NestedPropertiesRecursive,} from "../../sdk/types";
import {OrderDto} from "./order-dto";
import {Patcher} from "../common/model/data-patching";

/**
 * This interface represents a request to update / patch orders.
 */
export interface PatchOrdersRequest {
    /**
     * Filters are used to restrict the set of orders to modify.
     * All provided filters must match against an order.
     *
     * @example
     * The source system need to update the order with id ORD1234 the filters should be
     * `[{field: 'id', operation: FilterOperation.Equal, value: 'ORD1234'}]`
     *
     * @example
     * The source system need to update all orders with orderDate greater than 2023-01-01 14:45:59 the filters should be
     * `[{field: 'orderDate', operation: FilterOperation.GreaterThan, value: '2023-01-01T14:45:59Z'}]`
     */
    filters: Filter<Join<NestedPropertiesRecursive<OrderDto>, '.'>>[];

    /**
     * These are the fields to update of the order.
     *
     * Field values SHOULD use the enforce function to ensure the type.
     *
     * @example
     * If you like to set the status of all matching orders to "COMPLETED":
     * `[{field: 'status', value: enforce<OrderDto["status"]>('COMPLETED')}]`
     */
    fields: Patcher<Join<NestedProperties<OrderDto>, '.'>>[];
}
