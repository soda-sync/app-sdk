import {zFilter} from '../../../sdk/types';
import {ZProductDto} from "../../products/product-dto";
import {ZQueryRequest} from "../../common/model/query-request";
import {z} from "zod";

export const ZQueryProductsRequest = ZQueryRequest.extend({
    /* The filters to apply for query the products */
    filters: z.array(zFilter(ZProductDto)),
});

/* A request object for querying products. */
export type QueryProductsRequest = z.infer<typeof ZQueryProductsRequest>;
