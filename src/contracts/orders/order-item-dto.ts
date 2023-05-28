import {AttributeValues} from "../common/model/attribute-values-type";
import {MoneyDto} from "../money/model/money-dto";

export interface OrderItemDto {
    /** The id of the product in the external system. */
    id?: string;

    /** The name of the product. */
    name?: string;

    /** The description of the product. */
    description?: string;

    /** The sku of the product. */
    sku?: string;

    /** The amount of the product. */
    amount: number;

    /** The net price for a single item of the product. */
    singleNetPrice: MoneyDto;

    /** The gross price for a single item of the product. */
    singleGrossPrice: MoneyDto;

    /** The tax */
    taxRate: number;

    attributeValues?: AttributeValues;
}
