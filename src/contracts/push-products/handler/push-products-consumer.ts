import {ProductPushContainerDto} from "../model/product-push-container-dto";

/**
 * Implement this interface for APIs that can receive products.
 */
export interface PushProductsConsumer {

    /**
     * Pushes the products to the external system and returns the list of pushed products.
     *
     * @remarks
     * The sourceId of the container MUST NOT change
     *
     * @param products - The products to push
     */
    pushProducts(products: ProductPushContainerDto[]): Promise<ProductPushContainerDto[]>;
}
