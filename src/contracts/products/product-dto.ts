import {AttributeValues} from "../common/model/attribute-values-type";
import {MoneyDto} from "../money/model/money-dto";
import {ProductImageDto} from "./product-image-dto";
import {ProductAvailabilityDto} from "./product-availability-dto";

/**
 * A product
 */
export interface ProductDto {
    /** The id of the product. */
    id?: string;

    /**
     * The if of the parent product.
     * This is used to link a variation to its parent product.
     */
    variationParentId?: string;

    /** The name of the product. */
    name: string;

    /** The product description. */
    description?: string;

    /** The product manufacturer. */
    manufacturer?: string;

    /** The net price of the product */
    netPrice?: MoneyDto;

    /** The gross price of the product */
    grossPrice?: MoneyDto;

    /**
     *  The tax rate of the product.
     *  For example 19.0 %
     */
    taxRate?: number;

    /**
     * The weight of the product in grams
     */
    weightInGrams?: number;

    /** The SKU of the product. */
    sku?: string;

    /** The GTIN of the product. */
    gtin?: string;

    /** The images of the product. */
    images: ProductImageDto[];

    /**
     * Product details.
     * For example
     * {"color": "red", "size": "M"}
     */
    details?: Record<string, string>;

    /**
     * The availability for this product.
     * Leaving this field "undefined" means "not available"
     */
    availability?: ProductAvailabilityDto[];

    attributeValues?: AttributeValues;
}
