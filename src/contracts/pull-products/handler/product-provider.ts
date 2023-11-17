import {QueryProductsRequest} from "../model/query-products-request";
import {QueryProductsResult} from "../model/query-products-result";

/**
 * Implement this interface for implementing an api which can provide products.
 *
 * @see AppFeature
 */
export interface ProductProvider {
    /**
     * Handle the request and return the queried products in a unified form.
     */
    queryProducts(request: QueryProductsRequest): Promise<QueryProductsResult>;
}
