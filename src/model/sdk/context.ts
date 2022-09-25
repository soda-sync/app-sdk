import {KeyValueSet} from './key-value-set';

export interface Context {
  /** The current user configuration. */
  config: KeyValueSet;
}
