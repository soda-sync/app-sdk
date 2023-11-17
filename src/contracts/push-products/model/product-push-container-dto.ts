import {ZProductDto} from "../../products/product-dto";
import {z} from "zod";


export const ZProductPushContainerDto = z.object({
    /* This is the id of the product in the source system (products-supplier).
     *
     * @remarks
     * It MUST NOT be modified from the consumer since the source system may
     * need it for reverse mapping the result.
     */
    sourceId: z.string().optional(),
    /* The product to push. */
    product: ZProductDto,
});

/* This interface is used for wrapping products for pushing purposes. */
export type  ProductPushContainerDto = z.infer<typeof ZProductPushContainerDto>;
