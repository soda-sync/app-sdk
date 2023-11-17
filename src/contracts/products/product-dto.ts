import {ZAttributeValues} from "../common/model/attribute-values-type";
import {ZMoneyDto} from "../money/model/money-dto";
import {ZProductImageDto} from "./product-image-dto";
import {ZProductAvailabilityDto} from "./product-availability-dto";
import {z} from "zod";
import {ZTaxRate} from "../money/model/tax-rate-dto";

export const ZProductDto = z.object({
    /* The id of the product. */
    id: z.string().optional(),
    /* The id of the parent product. This is used to link a variation to its parent product. */
    variationParentId: z.string().optional(),
    /* The name of the product. */
    name: z.string(),
    /* The product description. */
    description: z.string().optional(),
    /* The product manufacturer. */
    manufacturer: z.string().optional(),
    /* The net price of the product. */
    netPrice: ZMoneyDto.optional(),
    /* The gross price of the product. */
    grossPrice: ZMoneyDto.optional(),
    /* The tax rate of the product. For example 19.0 % */
    taxRate: ZTaxRate.optional(),
    /* The weight of the product in grams. */
    weightInGrams: z.number().optional(),
    /* The SKU of the product. */
    sku: z.string().optional(),
    /* The GTIN of the product. */
    gtin: z.string().optional(),
    /* The images of the product. */
    images: z.array(ZProductImageDto),
    /* Product details. For example {"color": "red", "size": "M"}. */
    details: z.record(z.string(), z.string()).optional(),
    /* The availability for this product. Leaving this field "undefined" means "not available". */
    availability: z.array(ZProductAvailabilityDto).optional(),
    attributeValues: ZAttributeValues,
});

/* A product */
export type ProductDto = z.infer<typeof ZProductDto>;
