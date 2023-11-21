import {zNonEmptyFilterArray} from "../../sdk/types";
import {ZProductDto} from "./product-dto";
import {zPatcherArray} from "../common/model/data-patching";
import {z} from "zod";

export const ZPatchProductsRequest = z.object({
    /* Filters are used to restrict the set of products to modify.
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
    filters: zNonEmptyFilterArray(ZProductDto),
    /* These are the fields to update of the product.
     *
     * Field values SHOULD use the enforce function to ensure the type.
     *
     * @example
     * If you like to set the manufacturer of all matching products to "My manufacturer":
     * `[{field: 'manufacturer', value: enforce<ProductDto["manufacturer"]>('My manufacturer')}]`
     */
    fields: zPatcherArray(ZProductDto),
});

/* This type represents a request to update / patch products. */
export type PatchProductsRequest = z.infer<typeof ZPatchProductsRequest>;

/* This type represents a request to update / patch products. */
export type RawPatchProductsRequest = z.input<typeof ZPatchProductsRequest>;
