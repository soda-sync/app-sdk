import {Url} from './url';

export * from './url';

export interface Utils {
  parseUrl(url: string): Url;
}
