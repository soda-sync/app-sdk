import {z} from "zod";
import {ZAttributeValues} from "../../common/model/attribute-values-type";
import {zFilter} from "../../../sdk/types";
import {ZOrderDto} from "../../orders/order-dto";

const ZQueryOrderRequest = z.object({
    /* The filters to apply for querying the order. */
    filters: z.array(zFilter(ZOrderDto)),
    attributes: ZAttributeValues,
});

export type QueryOrderRequest = z.infer<typeof ZQueryOrderRequest>;
