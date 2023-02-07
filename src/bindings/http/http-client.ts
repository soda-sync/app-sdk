import {HttpResponse} from './http-response';
import {Nullable} from '../../types';

export interface HttpClient {
  request(method: string,
          url: string,
          body?: Nullable<string>,
          headers?: Nullable<{ [key: string]: string }>,
  ): Promise<HttpResponse>;
}
