import {FormField} from './form-field';
import {Nullable} from '../../../types';

/**
 * Contains information for the user configuration.
 */
export interface AppConfiguration {
  /** Configuration field. */
  fields?: Nullable<{ [key: string]: FormField }>;
}
