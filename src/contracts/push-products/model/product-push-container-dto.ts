import {ProductDto} from "../../products/product-dto";

/**
 * This interface is used for wrapping products for pushing purposes.
 */
export interface ProductPushContainerDto {
    /**
     * This is the id of the product in the source system (products-supplier).
     *
     * @remarks
     * It MUST NOT be modified from the consumer since the source system may
     * need it for reverse mapping the result.
     */
    sourceId?: string;

    /**
     * The product to push.
     */
    product: ProductDto;
}
