import {ReadonlyKeyValueSet} from './readonly-key-value-set';

export interface KeyValueSet extends ReadonlyKeyValueSet {
  /** Set a property in the key-value-set. */
  set(key: string, value: any): any;

  /** Delete a property from the key-value-set. */
  delete(key: string): void;
}
