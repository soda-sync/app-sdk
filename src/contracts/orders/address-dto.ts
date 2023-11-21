import {ZAttributeValues} from "../common/model/attribute-values-type";
import {z} from "zod";

export const ZAddressDto = z.object({
    id: z.string().optional(),
    company: z.string().optional(),
    firstName: z.string().optional(),
    surname: z.string().optional(),
    line2: z.string().optional(),
    street: z.string().optional(),
    houseNumber: z.string().optional(),
    zipCode: z.string().optional(),
    city: z.string().optional(),
    countryCode: z.string().optional(),
    state: z.string().optional(),
    attributeValues: ZAttributeValues,
});

export type AddressDto = z.infer<typeof ZAddressDto>;
export type RawAddressDto = z.input<typeof ZAddressDto>;
