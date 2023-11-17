import {z} from "zod";

export const ZPaymentStatus = z.enum([
    'OPEN',
    'IN_PROGRESS',
    'PARTIALLY_PAID',
    'PAID',
    'PARTIALLY_REFUNDED',
    'REFUNDED',
]);

export type PaymentStatus = z.infer<typeof ZPaymentStatus>
