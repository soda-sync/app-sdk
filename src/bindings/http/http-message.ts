import {z} from "zod";

export const ZHttpMessage = z.object({
    headers: z.record(z.string(), z.string()).optional().default({}),
    body: z.string().optional(),
});

export type HttpMessage = z.infer<typeof ZHttpMessage>;
