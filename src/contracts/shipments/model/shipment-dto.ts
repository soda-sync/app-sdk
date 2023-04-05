import {DateTimeString} from '../../../sdk/types';
import {MoneyDto} from "../../money/model/money-dto";
import {AttributeValues} from "../../common/model/attribute-values-type";

export interface ShipmentDto {
  /** The id of the shipment */
  id?: string;

  /** The date when this order was shipped */
  date: DateTimeString;

  /** The country code where this shipment is sent from  */
  sourceCountryCode?: string;

  /** The shipping method */
  method?: string;

  /** The net ship cost. */
  netPrice: MoneyDto;

  /** The gross ship cost. */
  grossPrice: MoneyDto;

  /** The tax */
  taxRate: number;

  attributeValues?: AttributeValues;
}
