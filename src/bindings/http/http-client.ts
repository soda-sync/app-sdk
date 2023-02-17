import {HttpResponse} from './http-response';

export interface HttpClient {
  request(method: string,
          url: string,
          body?: string,
          headers?: { [key: string]: string },
  ): Promise<HttpResponse>;
}
