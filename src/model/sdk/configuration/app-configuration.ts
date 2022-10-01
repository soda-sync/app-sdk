import {FormField} from './form-field';

/**
 * Contains information for the user configuration.
 */
export interface AppConfiguration {
  fields?: Nullable<{ [key: string]: FormField }>;
}
