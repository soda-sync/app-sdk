import {DateTimeString} from '../sdk/types';

export interface ShipmentDto {
  shipDate: DateTimeString;
  sourceCountryCode?: Nullable<string>;
}
