import {DateTimeString} from '../sdk/types';

export interface OrderShipmentDto {
  shipDate: DateTimeString;
  sourceCountryCode?: Nullable<string>;
}
