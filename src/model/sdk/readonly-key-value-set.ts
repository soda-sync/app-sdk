export interface ReadonlyKeyValueSet {
  /** Returns an entry from the key value set. */
  get(key: string): any;

  /** Returns all key-values */
  getAll(): Record<string, any>;
}
