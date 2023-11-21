import {zFilter,} from "../../sdk/types";
import {z} from "zod";
import {zPatcher} from "../common/model/data-patching";
import {ZOrderDto} from "./order-dto";

export const ZPatchOrdersRequest = z.object({

    /* Filters are used to restrict the set of orders to modify.
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
    filters: z.array(zFilter(ZOrderDto)),

    /* These are the fields to update of the order.
     *
     * Field values SHOULD use the enforce function to ensure the type.
     *
     * @example
     * If you like to set the status of all matching orders to "COMPLETED":
     * `[{field: 'status', value: enforce<OrderDto["status"]>('COMPLETED')}]`
     */
    fields: z.array(zPatcher(ZOrderDto)),
});

/* This interface represents a request to update / patch orders. */
export type PatchOrdersRequest = z.infer<typeof ZPatchOrdersRequest>;
