import {Url} from './url';

export * from './url';

/**
 * Helper utilities
 */
export interface Utils {
  /**
   * Parse an url string to an url object.
   * This is us
   */
  parseUrl(url: string): Url;
}
