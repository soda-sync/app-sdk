import {HttpRequest} from "../../../bindings/http/http-request";
import {RawHttpResponse} from "../../../bindings/http/http-response";
import {ProductDto} from "../../products/product-dto";
import {RawPatchProductsRequest} from "../../products/patch-products-request";

/**
 * This is the caller side of the contract.
 *
 * @remarks
 * 1. The processUpdateRequest method converts the raw http request into an PatchProductsRequest
 * 2. The PatchProductsRequest is processed by the other system which returns the ProductDto for the patched product
 * 3. The provideUpdatedProduct method converts the ProductDto to a response that is suitable for the requesting system.
 */
export interface ProductsUpdateSupplier {
    /**
     * Handle the incoming request and transform it to a QueryProductsRequest.
     *
     * @param request - The raw http request to process.
     * @returns The PatchProductsRequest
     *
     * @example
     * Raw http request:
     * ```http
     * POST /product_id=1234
     * Content-Type: application/json
     *
     * {
     *    "name": "test",
     *    "meta": {
     *      "description": "A nice product"
     *    }
     * }
     * ```
     *
     * PatchProductsRequest:
     * ```typescript
     * {
     *     filters: [
     *         {field: 'id', operation: FilterOperation.Equal, value: enforce<ProductDto["id"]>('1234')}
     *     ],
     *     fields: [
     *         {field: 'name', operation: PatchOperation.Set, value: enforce<ProductDto["name"]>('test')},
     *         {field: 'description', operation: PatchOperation.Set, value: enforce<ProductDto["description"]>('A nice product')},
     *     ],
     * }
     * ```
     */
    processProductsUpdateRequest(request: HttpRequest): Promise<RawPatchProductsRequest>;

    /**
     * Convert the updated products to valid http response.
     *
     * @param products - The updated products.
     */
    provideUpdatedProducts(products: ProductDto[]): Promise<RawHttpResponse>;
}
