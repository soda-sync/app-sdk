import {ZAttributeValues} from "../common/model/attribute-values-type";
import {z} from "zod";

export const ZProductImageDto = z.object({
    /* The URL to the product image. */
    url: z.string().url(),
    /* Should this image used as the default image? */
    isDefault: z.boolean().optional(),
    attributeValues: ZAttributeValues,
});

export type ProductImageDto = z.infer<typeof ZProductImageDto>;
export type RawProductImageDto = z.input<typeof ZProductImageDto>;
