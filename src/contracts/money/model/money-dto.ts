import {z} from "zod";

/* This type represents a price in the smallest unit of the currency.
 *
 * @example
 * EUR  5.23 ->  523 cents
 * USD 12.23 -> 1223 pennies
 */
export const ZSmallestCurrencyUnit = z.number();

/* A 3-letter ISO 4217 currency code. For example EUR */
export const ZCurrencyCode = z.string()
    .length(3)
    .toUpperCase();

export const ZMoneyDto = z.object({
    /* The price */
    value: ZSmallestCurrencyUnit,

    /* The divisor of the currency.
     * For example **100** cents = 1 EUR
     * @example 100
     */
    divisor: z.number().positive(),

    /* A 3 letter ISO 4217 currency code.
     * @example EUR
     */
    currencyCode: ZCurrencyCode.optional(),
});

/* Represents a monetary value */
export type MoneyDto = z.infer<typeof ZMoneyDto>;

/* Represents a monetary value */
export type RawMoneyDto = z.input<typeof ZMoneyDto>;
