import {ZAttributeValues} from "../common/model/attribute-values-type";
import {ZMoneyDto} from "../money/model/money-dto";
import {z} from "zod";
import {ZTaxRate} from "../money/model/tax-rate-dto";

export const ZOrderItemDto = z.object({
    /* The id of the product in the external system. */
    id: z.string().optional(),
    /* The name of the product. */
    name: z.string().optional(),
    /* The description of the product. */
    description: z.string().optional(),
    /* The sku of the product. */
    sku: z.string().optional(),
    /* The amount of the product. */
    amount: z.number(),
    /* The net price for a single item of the product. */
    singleNetPrice: ZMoneyDto,
    /* The gross price for a single item of the product. */
    singleGrossPrice: ZMoneyDto,
    /* The tax */
    taxRate: ZTaxRate,
    attributeValues: ZAttributeValues,
});

export type OrderItemDto = z.infer<typeof ZOrderItemDto>;
export type RawOrderItemDto = z.input<typeof ZOrderItemDto>;
