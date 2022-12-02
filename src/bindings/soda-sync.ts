import {Logger} from './logger';
import {Context} from './context';
import {HttpClient} from './http/http-client';
import {Utils} from './utils/utils';
import {AppDetails} from '../model/sdk/app-details';

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
     * Access the current app context. This is useful for accessing configuration values.
     */
    const context: Context;

    /**
     * Use the logger to log messages from your app.
     */
    const logger: Logger;

    /**
     * Helper utilities.
     */
    const utils: Utils;

    /**
     * Register your app.
     */
    const registerApp: (app: AppDetails) => void;
  }
}
