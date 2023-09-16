import {AttributeValues} from "../common/model/attribute-values-type";

export interface CustomerDto {
  id?: string;
  mailAddress?: string;
  phoneNumber?: string;
  vatId?: string;
  attributeValues?: AttributeValues;
}
