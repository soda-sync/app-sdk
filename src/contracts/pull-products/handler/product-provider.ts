import {QueryResult} from "../../common/model/query-result";
import {ProductDto} from "../../products/product-dto";
import {QueryProductsRequest} from "../model/query-products-request";

/**
 * Implement this interface for implementing an api which can provide products.
 *
 * @see AppFeature
 */
export interface ProductProvider {
    /**
     * Handle the request and return the queried products in a unified form.
     */
    queryProducts(request: QueryProductsRequest): Promise<QueryResult<ProductDto>>;
}
