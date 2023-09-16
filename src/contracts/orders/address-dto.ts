import {AttributeValues} from "../common/model/attribute-values-type";

export interface AddressDto {
  id?: string;
  company?: string;
  firstName?: string;
  surname?: string;
  line2?: string;
  street?: string;
  houseNumber?: string;
  zipCode?: string;
  city?: string;
  countryCode?: string;
  state?: string;
  attributeValues?: AttributeValues;
}
