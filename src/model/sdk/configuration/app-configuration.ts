import {FormField} from '@soda-sync/app-sdk/model';

/**
 * Contains information for the user configuration.
 */
export interface AppConfiguration {
  fields?: { [key: string]: FormField };
}
