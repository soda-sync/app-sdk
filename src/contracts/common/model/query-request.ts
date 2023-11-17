import {z} from "zod";
import {ZAttributeValues} from "./attribute-values-type";

export const ZQueryRequest = z.object({
    /* The token of the queried page. To request the first page, set it to null. */
    pageToken: z.string().optional(),
    /* The page size. */
    pageSize: z.number().gt(0),
    attributeValues: ZAttributeValues,
});

/* A request object for querying. */
export type QueryRequest = z.infer<typeof ZQueryRequest>;
