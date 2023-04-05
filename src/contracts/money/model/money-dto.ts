/**
 * This type represents a price in the smallest unit of the currency.
 *
 * For example:
 * EUR  5.23 ->  523 cents
 * USD 12.23 -> 1223 pennies
 */
type SmallestCurrencyUnit = number;

/**
 * Represents a monetary value
 */
export interface MoneyDto {
    /** The price **/
    value: SmallestCurrencyUnit;

    /**
     * A 3 letter ISO 4217 currency code.
     * @example EUR
     */
    currencyCode?: string;

    /**
     * The divisor of the currency.
     * For example **100** cents = 1 EUR
     * @example 100
     */
    divisor: number;
}
