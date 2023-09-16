import {Logger} from './logger';
import {Context} from './context';
import {HttpClient} from './http/http-client';
import {AppDetails} from '../sdk/app-details';
import {Hooks} from "./hooks";

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
     * Register your app.
     */
    readonly registerApp: (app: AppDetails) => void;

    /**
     * Hooks to control the flow of soda sync apps.
     */
    readonly hooks: Hooks;
  }

  const SodaSync: SodaSyncEnv;
}
