import {HttpResponse} from './http-response';
export interface HttpClient {
  request(method: string,
          url: string,
          body?: Nullable<string>,
          headers?: Nullable<{ [key: string]: string }>,
  ): HttpResponse;
}
