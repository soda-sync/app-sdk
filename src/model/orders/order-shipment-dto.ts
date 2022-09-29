import {DateTimeString} from '../sdk';

export interface OrderShipmentDto {
  shipDate: DateTimeString;
  sourceCountryCode?: string;
}
