import {Nullable} from '../../types';

export interface BuyerDto {
  mailAddress?: Nullable<string>;
  phoneNumber?: Nullable<string>;
  vatId?: Nullable<string>;
}
