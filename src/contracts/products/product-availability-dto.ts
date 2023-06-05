import {AttributeValues} from "../common/model/attribute-values-type";

export interface ProductAvailabilityDto {

    /** The number of products in stock */
    amount: number;

    /** The id of the stock */
    stockId?: string;

    /** The name of the stock. */
    stockName?: string;

    attributeValues?: AttributeValues;
}
