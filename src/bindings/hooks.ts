import {HttpResponse} from "./http/http-response";

export interface Hooks {
  /**
   * This method terminates the current request and stops the further execution flow.
   *
   * @param response The response to send to the client.
   */
  terminateRequest(response: HttpResponse): never;
}
