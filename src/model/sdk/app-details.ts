import {AppAuthor} from './app-author';
import {AppFeature, AppVersion} from './types';

export interface AppDetails {
  name: string;
  packageId: string;
  description: string;
  author: AppAuthor;
  version: AppVersion;
  supportedFeatures: AppFeature[];
  factory: <T>() => T;
  accessedUrls?: RegExp[];
}
