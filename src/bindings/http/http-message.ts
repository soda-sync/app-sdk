import {z} from "zod";

export const ZHttpMessage = z.object({
    headers: z.record(z.string(), z.string()).default({}),
    body: z.string().optional(),
});

export type HttpMessage = z.infer<typeof ZHttpMessage>;
export type RawHttpMessage = z.input<typeof ZHttpMessage>;
