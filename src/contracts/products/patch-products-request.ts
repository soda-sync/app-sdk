import {Filter, Join, NestedProperties, NestedPropertiesRecursive,} from "../../sdk/types";
import {ProductDto} from "./product-dto";
import {Patcher} from "../common/model/data-patching";

/**
 * This interface represents a request to update / patch products.
 */
export interface PatchProductsRequest {
    /**
     * Filters are used to restrict the set of products to modify.
     * All provided filters must match against a product.
     *
     * @example
     * The source system need to update the product with id ITM#123 the filters should be
     * `[{field: 'id', operation: FilterOperation.Equal, value: 'ITM#123'}]`
     *
     * @example
     * The source system need to update all products with taxRate greater than 0 the filters should be
     * `[{field: 'taxRate', operation: FilterOperation.GreaterThan, value: 0}]`
     */
    filters: Filter<Join<NestedPropertiesRecursive<ProductDto>, '.'>>[];

    /**
     * These are the fields to update of the product.
     *
     * Field values SHOULD use the enforce function to ensure the type.
     *
     * @example
     * If you like to set the manufacturer of all matching products to "My manufacturer":
     * `[{field: 'manufacturer', value: enforce<ProductDto["manufacturer"]>('My manufacturer')}]`
     */
    fields: Patcher<Join<NestedProperties<ProductDto>, '.'>>[];
}
