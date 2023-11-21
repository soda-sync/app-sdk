import {z} from "zod";
import {ZHttpMessage} from './http-message';

export const ZHttpRequest = ZHttpMessage.extend({
    method: z.string(),
    url: z.string(),
});

export type HttpRequest = z.infer<typeof ZHttpRequest>;
