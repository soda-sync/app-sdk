import {AppAuthor} from './app-author';
import {AppFeature, AppVersion} from './types';
import {Integration} from './integration';
import {AppDocs} from './app-docs';
import {AppConfiguration} from './configuration/app-configuration';
import {Nullable} from '../../types';

/**
 * Represents the details of the app.
 */
export interface AppDetails {
  /**
   * The name of the app. This will be displayed to all users.
   */
  name: string;

  /**
   * The package id of the app.
   * It consists of tree parts separated by dots and must be a reversed host name.
   * For example: com.sodasync.example-package
   */
  packageId: string;

  /**
   * The description about what the app is used for.
   */
  description: string;

  /**
   * The author of the app. This can be an individual person or a company.
   */
  author: AppAuthor;

  /**
   * The semantic version of the app.
   */
  version: AppVersion;

  /**
   * The features that are supported by this app.
   */
  supportedFeatures: AppFeature[];

  /**
   * The factory to produce the app instance.
   */
  factory: () => Integration;

  /**
   * Documentation for the app.
   */
  docs?: Nullable<AppDocs>;

  /**
   * Only urls which are whitelisted in this array can be accessed through the SodaSync.http object.
   */
  accessedUrls?: Nullable<RegExp[]>;

  /**
   * User configuration.
   */
  configuration?: Nullable<AppConfiguration>;
}
