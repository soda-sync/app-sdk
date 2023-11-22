import {HttpRequest} from '../../../bindings/http/http-request';
import {RawHttpResponse} from '../../../bindings/http/http-response';
import {RawQueryProductsRequest} from "../model/query-products-request";
import {QueryProductsResult} from "../model/query-products-result";

/**
 * Implement this interface for implementing an api which requests products.
 *
 * @see AppFeature
 */
export interface ProductRequester {

    /**
     * Handle the incoming request and transform it to a QueryProductsRequest.
     */
    processProductsRequest(request: HttpRequest): Promise<RawQueryProductsRequest>;

    /**
     * Transform the result to the expected response.
     */
    provideProducts(result: QueryProductsResult): Promise<RawHttpResponse>;
}
