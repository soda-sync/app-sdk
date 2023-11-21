import {ZHttpMessage} from './http-message';
import {z} from "zod";

export const ZHttpResponse = ZHttpMessage.extend({
    statusCode: z.number({}),
});

export type HttpResponse = z.infer<typeof ZHttpResponse>;
