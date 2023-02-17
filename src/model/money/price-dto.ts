/**
 * Represents a price.
 */
export interface PriceDto {
  /**
   * The price except VAT.
   **/
  netValue: number;

  /** The price inclusive VAT. */
  grossValue: number;

  /**
   * The tax rate.
   * @example 19
   */
  taxRate: number;

  /**
   * A 3 letter ISO 4217 currency code.
   * @example EUR
   */
  currencyCode?: string;
}
