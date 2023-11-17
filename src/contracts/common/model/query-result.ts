import {z} from "zod";

export function zQueryResult<T extends z.ZodRawShape>(obj: z.ZodObject<T>) {
    return z.object({
        /* The token of the requested page. */
        pageToken: z.string().optional(),
        /* The page size */
        pageSize: z.number().gt(0),
        /* The token of the next page. If there is no next page, leave it empty. */
        nextPageToken: z.string().optional(),
        /* The queried data */
        data: z.array(obj),
    });
}
