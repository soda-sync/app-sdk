/**
 * The query result
 */
export interface QueryResult<T> {
    /**
     * The token of the requested page.
     */
    pageToken?: string;

    /**
     * The page size
     * Must be >0
     */
    pageSize: number;

    /**
     * The token of the next page.
     * If there is no next page, leave it empty.
     */
    nextPageToken?: string;

    /**
     * The orders.
     */
    data: T[];
}
