import {z} from "zod";

export const ZOrderTransactionType = z.enum(['PAYMENT', 'REFUND']);

export type OrderTransactionType = z.infer<typeof ZOrderTransactionType>
