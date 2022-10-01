/**
 * A request object for querying orders.
 */
import {DateTimeString} from '../../model';

export interface QueryOrdersRequest {
  /**
   * The token of the queried page.
   * To request the first page, set it to null.
   */
  pageToken?: Nullable<string>;

  /**
   * The page size
   * Must be >0
   */
  pageSize: number;

  /**
   * Only include orders which are updated after this date.
   */
  minUpdatedAt?: Nullable<DateTimeString>;

  /**
   * Custom data
   */
  attributes?: Nullable<{ [key: string]: any }>,
}
