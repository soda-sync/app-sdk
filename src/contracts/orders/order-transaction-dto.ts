import {ZOrderTransactionType} from './order-transaction-type';
import {ZAttributeValues} from "../common/model/attribute-values-type";
import {ZDateTimeString} from "../../sdk/types";
import {ZMoneyDto} from "../money/model/money-dto";
import {z} from "zod";

export const ZOrderTransactionDto = z.object({
    /* The id of the transaction. */
    id: z.string().optional(),
    /* The date of this transaction. */
    date: ZDateTimeString,
    /* The type of this transaction. */
    type: ZOrderTransactionType,
    /* The payment method (credit card, pre-payment etc.)  */
    method: z.string(),
    /* The amount of this transaction. */
    amount: ZMoneyDto,
    attributeValues: ZAttributeValues,
})

export type  OrderTransactionDto = z.infer<typeof ZOrderTransactionDto>;
