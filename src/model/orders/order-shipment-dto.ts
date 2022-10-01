import {DateTimeString} from '../sdk';

export interface OrderShipmentDto {
  shipDate: DateTimeString;
  sourceCountryCode?: Nullable<string>;
}
