import {zFilterArray} from '../../../sdk/types';
import {ZOrderDto} from "../../orders/order-dto";
import {ZQueryRequest} from "../../common/model/query-request";
import {z} from "zod";

export const ZQueryOrdersRequest = ZQueryRequest.extend({
    /* The filters to apply for query the orders */
    filters: zFilterArray(ZOrderDto),
});

/* A request object for querying orders. */
export type QueryOrdersRequest = z.infer<typeof ZQueryOrdersRequest>;
