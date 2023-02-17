/**
 * This class helps you to convert page numbers to page tokens.
 * It should be used by classes that implement the OrderRequester interface to convert a page number to a page token.
 *
 * A page token is an opaque string that is passed to an OrderProvider instance. The OrderProvider will also return a
 * nextPageToken which is associated with the next page.
 *
 * Usage:
 * 1. In `processOrdersRequest` use getPageToken
 * 2. In `provideOrders` use `storeNextPageToken`
 */
export class PageNumberConverter {

    /**
     * Returns the token for the requested page. If the first page is requested, null will be returned.
     *
     * @param key An unique identifier. This is used to fetch the data from the connection config.
     * @param page The requested page.
     *
     * @return If the page is 1, null, otherwise the page token for the next page.
     *
     * @throws If the requested page is out of order (E.g. 1 -> 2 -> 5)
     * @throws If the connection config does not contain a token for the page.
     *
     */
    public static getPageToken(key: string, page: number): string | null {
        if (page == 1) {
            return null;
        }
        const previousRequestedPage = SodaSync.context.connectionConfig.get(`${key}_previousRequestedPage`);
        if (previousRequestedPage === null || (Number(previousRequestedPage) + 1) !== page) {
            const message = `Out of order. The previous requested page was ${previousRequestedPage} the current requested page is ${page}.`;
            SodaSync.logger.error(message);
            throw new Error(message)
        }

        const nextPageToken = SodaSync.context.connectionConfig.get(`${key}_nextPageToken`);
        if (nextPageToken == null) {
            const message = `Can not request the next page without a next page token. You probably reached the end of data. `;
            SodaSync.logger.error(message);
            throw new Error(message)
        }

        return nextPageToken;
    }

    /**
     * Stores the token for the next page in the connection config.
     *
     * @param key An unique identifier. This is used to store the data in the connection config.
     * @param currentPage The current requested page
     * @param token The token for the next page.
     */
    public static storeNextPageToken(key: string, currentPage: number, token?: string): void {
        SodaSync.context.connectionConfig.set(`${key}_previousRequestedPage`, currentPage.toString());
        SodaSync.context.connectionConfig.set(`${key}_nextPageToken`, token ?? null);
    }
}
