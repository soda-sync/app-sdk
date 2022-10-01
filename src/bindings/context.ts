import {KeyValueSet} from '../model';

export interface Context {
  /** The current user configuration. */
  config: KeyValueSet;
}
