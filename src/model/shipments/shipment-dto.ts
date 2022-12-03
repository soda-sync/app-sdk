import {DateTimeString} from '../sdk/types';
import {Nullable} from '../../types';

export interface ShipmentDto {
  shipDate: DateTimeString;
  sourceCountryCode?: Nullable<string>;
}
