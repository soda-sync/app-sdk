import {ZOrderDto} from "../../orders/order-dto";
import {zQueryResult} from "../../common/model/query-result";
import {z} from "zod";

export const ZQueryOrdersResult = zQueryResult(ZOrderDto);

/* The query orders result */
export type QueryOrdersResult = z.infer<typeof ZQueryOrdersResult>;
