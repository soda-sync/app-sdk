import {HttpClient} from './http';
import {Utils} from './utils';
import {Logger} from './logger';
import {Context} from './context';

declare global {
  /**
   * SodaSync bindings
   */
  module SodaSync {

    /**
     * Provides a http client for interacting with apis.
     */
    const http: HttpClient;

    /**
     * Access the current app context. This is usefull for accessing configuration values.
     */
    const context: Context;

    /**
     * Use the logger to log messages from your app.
     */
    const logger: Logger;

    /**
     * Helper utilities
     */
    const utils: Utils;
  }
}
