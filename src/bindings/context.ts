import {KeyValueSet} from '../model/sdk/key-value-set';

export interface Context {
  /**
   *  The current integration configuration.
   *  DON'T USE THIS FOR STATE RELEVANT DATA.
   */
  config: KeyValueSet;

  /**
   * The configuration for the connection.
   * Use this to store state relevant data.
   */
  connectionConfig: KeyValueSet;
}
