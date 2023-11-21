import {z} from "zod";

export const ZAuthRequest = z.object({
    /* The URL where the user needs to get redirected for authentication. */
    authUrl: z.string(),
    /* A key-value set of state relevant data. */
    state: z.record(z.string(), z.string()).default({}),
});

export type AuthRequest = z.infer<typeof ZAuthRequest>;
export type RawAuthRequest = z.input<typeof ZAuthRequest>;
