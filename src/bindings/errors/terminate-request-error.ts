import {HttpResponse} from "../http/http-response";

export class TerminateRequestError extends Error {
    private readonly type: string = 'TerminateRequestError';

    constructor(private readonly response: HttpResponse,
                message?: string
    ) {
        super(message);
    }
}
