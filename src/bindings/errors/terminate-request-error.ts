import {HttpResponse} from "../http/http-response";

/**
 * @deprecated This never worked. Use SodaSync.hooks.terminateRequest(response)
 */
export class TerminateRequestError extends Error {
    private readonly type: string = 'TerminateRequestError';

    constructor(private readonly response: HttpResponse,
                message?: string
    ) {
        super(message);
    }
}
