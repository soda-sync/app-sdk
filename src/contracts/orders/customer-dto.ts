import {ZAttributeValues} from "../common/model/attribute-values-type";
import {z} from "zod"

export const ZCustomerDto = z.object({
    id: z.string().optional(),
    mailAddress: z.string().email().optional(),
    phoneNumber: z.string().optional(),
    vatId: z.string().optional(),
    attributeValues: ZAttributeValues,
});

export type CustomerDto = z.infer<typeof ZCustomerDto>;
export type RawCustomerDto = z.input<typeof ZCustomerDto>;
