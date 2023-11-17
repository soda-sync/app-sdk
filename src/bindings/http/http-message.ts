import {z} from "zod";

export const ZHttpMessage = z.object({
    headers: z.record(z.string(), z.string()),
    body: z.string().optional(),
});

export type HttpMessage = z.infer<typeof ZHttpMessage>;
