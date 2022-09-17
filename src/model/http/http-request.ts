import {HttpMessage} from './http-message';

export interface HttpRequest extends HttpMessage {
  method: string;
  url: string;
}
