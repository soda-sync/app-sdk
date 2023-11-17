import {z} from "zod";

export const ZOrderStatus = z.enum(['OPEN', 'CONFIRMED', 'PROCESSING', 'CANCELED', 'COMPLETED']);

export type OrderStatus = z.infer<typeof ZOrderStatus>
