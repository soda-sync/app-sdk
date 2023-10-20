import {PatchProductsRequest} from "../../products/patch-products-request";
import {ProductDto} from "../../products/product-dto";

/**
 * Implement this interface for APIs that can receive product updates.
 */
export interface ProductsUpdateConsumer {

    /**
     * Updates a set of products.
     *
     * @remarks
     * The request contain filters. All products that match against all filters are updated.
     *
     * @example
     * Request:
     * ```ts
     * {
     *     filters: [
     *         {field: 'manufacturer', operation: FilterOperation.Equal, value: 'My manufacturer'}
     *         {field: 'taxRate', operation: FilterOperation.NotEqual, value: 19}
     *     ],
     *     fields: [
     *         {field: 'manufacturer', operation: PatchOperation.Remove}
     *     ]
     * }
     * ```
     *
     * @param request - The request that contain details for patching products
     *
     * @returns The list of patched products
     */
    updateProducts(request: PatchProductsRequest): Promise<ProductDto[]>;
}
