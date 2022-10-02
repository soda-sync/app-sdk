import {ReadonlyKeyValueSet} from './readonly-key-value-set';

export interface KeyValueSet extends ReadonlyKeyValueSet {
  set(key: string, value: any): any;

  delete(key: string): void;
}
