import {ZDateTimeString} from '../../../sdk/types';
import {ZMoneyDto} from "../../money/model/money-dto";
import {ZAttributeValues} from "../../common/model/attribute-values-type";
import {z} from "zod";
import {ZTaxRate} from "../../money/model/tax-rate-dto";

export const ZShipmentDto = z.object({
    /* The id of the shipment. */
    id: z.string().optional(),
    /* The date when this order was shipped. */
    date: ZDateTimeString,
    /* The country code where this shipment is sent from. */
    sourceCountryCode: z.string().optional(),
    /* The shipping method. */
    method: z.string().optional(),
    /* The net ship cost. */
    netPrice: ZMoneyDto,
    /* The gross ship cost. */
    grossPrice: ZMoneyDto,
    /* The tax rate. */
    taxRate: ZTaxRate,
    attributeValues: ZAttributeValues,
});

export type ShipmentDto = z.infer<typeof ZShipmentDto>;
export type RawShipmentDto = z.input<typeof ZShipmentDto>;
