import {Logger} from './logger';
import {Context} from './context';
import {HttpClient} from './http/http-client';
import {Utils} from './utils/utils';
import {AppDetails} from '../model/sdk/app-details';

declare global {
  /**
   * SodaSync bindings
   */
  interface SodaSyncEnv {

    /**
     * Provides a http client for interacting with apis.
     */
    readonly http: HttpClient;

    /**
     * Access the current app context. This is useful for accessing configuration values.
     */
    readonly context: Context;

    /**
     * Use the logger to log messages from your app.
     */
    readonly logger: Logger;

    /**
     * Helper utilities.
     */
    readonly utils: Utils;

    /**
     * Register your app.
     */
    readonly registerApp: (app: AppDetails) => void;
  }

  const SodaSync: SodaSyncEnv;
}
