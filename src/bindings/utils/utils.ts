/**
 * Helper utilities
 */
import {Url} from './url';

export interface Utils {
  /**
   * Parse an url string to an url object.
   * This is us
   */
  parseUrl(url: string): Url;
}
