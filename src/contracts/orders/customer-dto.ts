import {AttributeValues} from "../common/model/attribute-values-type";

export interface CustomerDto {
  mailAddress?: string;
  phoneNumber?: string;
  vatId?: string;
  attributeValues?: AttributeValues;
}
