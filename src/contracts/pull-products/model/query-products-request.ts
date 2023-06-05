import {Filter, Join, NestedProperties} from '../../../sdk/types';
import {ProductDto} from "../../products/product-dto";
import {QueryRequest} from "../../common/model/query-request";

/**
 * A request object for querying products.
 */
export interface QueryProductsRequest extends QueryRequest {
    /**
     * The filters to apply for query the products
     */
    filters: Filter<ProductDto, Join<NestedProperties<ProductDto>, '.'>>[];
}
