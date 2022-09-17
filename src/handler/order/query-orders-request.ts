/**
 * A request object for querying orders.
 */
export interface QueryOrdersRequest {
  /**
   * The requested page.
   * Must be >=1
   */
  page: number;

  /**
   * The page size
   * Must be >0
   */
  pageSize: number;

  /**
   * Only include orders which are updated after this date.
   */
  minUpdatedAt?: Date;

  /**
   * Custom data
   */
  attributes?: { [key: string]: any },
}
