import {ZAttributeValues} from "../common/model/attribute-values-type";
import {z} from "zod";

export const ZProductAvailabilityDto = z.object({
    /* The number of products in stock */
    amount: z.number(),
    /* The id of the stock */
    stockId: z.string().optional(),
    /* The name of the stock */
    stockName: z.string().optional(),
    attributeValues: ZAttributeValues,
});

export type ProductAvailabilityDto = z.infer<typeof ZProductAvailabilityDto>;
export type RawProductAvailabilityDto = z.input<typeof ZProductAvailabilityDto>;
