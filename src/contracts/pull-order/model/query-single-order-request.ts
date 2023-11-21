import {z} from "zod";
import {ZAttributeValues} from "../../common/model/attribute-values-type";
import {zFilterArray} from "../../../sdk/types";
import {ZOrderDto} from "../../orders/order-dto";

export const ZQueryOrderRequest = z.object({
    /* The filters to apply for querying the order. */
    filters: zFilterArray(ZOrderDto),
    attributes: ZAttributeValues,
});

export type QueryOrderRequest = z.infer<typeof ZQueryOrderRequest>;
