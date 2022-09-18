import {FormField} from './form-field';

/**
 * Contains information for the user configuration.
 */
export interface AppConfiguration {
  fields?: { [key: string]: FormField };
}
