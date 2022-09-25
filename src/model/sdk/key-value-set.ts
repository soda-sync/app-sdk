import {ReadonlyKeyValueSet} from './readonly-key-value-set';

export interface KeyValueSet extends ReadonlyKeyValueSet {
  set(key: string): any;

  delete(key: string): any;
}
