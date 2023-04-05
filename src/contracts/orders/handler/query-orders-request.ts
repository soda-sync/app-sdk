import {DateTimeString} from '../../../sdk/types';

/**
 * A request object for querying orders.
 */
export interface QueryOrdersRequest {
  /**
   * The token of the queried page.
   * To request the first page, set it to null.
   */
  pageToken?: string;

  /**
   * The page size
   * Must be >0
   */
  pageSize: number;

  /**
   * Only include orders which are updated after this date.
   */
  minUpdatedAt?: DateTimeString;

  /**
   * Custom data
   */
  attributes?: { [key: string]: any },
}
