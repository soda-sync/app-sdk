import {AttributeValues} from "../common/model/attribute-values-type";

export interface ProductImageDto {
    /** The URL to the product image. */
    url: string;

    /** Should this image used as the default image? */
    isDefault?: boolean;

    attributeValues?: AttributeValues;
}
