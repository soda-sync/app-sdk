import {zFilter} from '../../../sdk/types';
import {ZOrderDto} from "../../orders/order-dto";
import {ZQueryRequest} from "../../common/model/query-request";
import {z} from "zod";

const ZQueryOrdersRequest = ZQueryRequest.extend({
    /* The filters to apply for query the orders */
    filters: z.array(zFilter(ZOrderDto)),
});

/* A request object for querying orders. */
export type QueryOrdersRequest = z.infer<typeof ZQueryOrdersRequest>;
