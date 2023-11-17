import {z} from "zod";
import {ZHttpMessage} from './http-message';

const ZHttpRequest = ZHttpMessage.extend({
    method: z.string(),
    url: z.string(),
});

export type HttpRequest = z.infer<typeof ZHttpRequest>;
