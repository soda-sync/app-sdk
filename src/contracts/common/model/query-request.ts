/**
 * A request object for querying.
 */
export interface QueryRequest {
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
     * Custom data
     */
    attributes?: { [key: string]: any },
}
