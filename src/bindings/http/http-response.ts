import {HttpMessage} from './http-message';

export interface HttpResponse extends HttpMessage {
  statusCode: number;
}
