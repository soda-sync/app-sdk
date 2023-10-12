import {AppAuthor} from './app-author';
import {AppFactory, AppFeature, AppVersion} from './types';
import {AppDocs} from './app-docs';
import {AppConfiguration} from './configuration/app-configuration';
import {FeaturePairDetector} from "../contracts/common/handler/feature-pair-detector";
import {OAuth2Client} from "../contracts/oauth/oauth2-client";

/**
 * Represents the details of the app.
 */
export interface AppDetails {

    sdkVersion: AppVersion;

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
     *
     * If the feature is undefined, the runtime will call checkConfiguration
     * in the Integration interface.
     *
     */
    factory: AppFactory;

    /**
     * Documentation for the app.
     */
    docs?: AppDocs;

    /**
     * Only urls which are whitelisted in this array can be accessed through the SodaSync.http object.
     */
    accessedUrls?: RegExp[];

    /**
     * User configuration.
     */
    configuration?: AppConfiguration;

    /**
     * A feature detector to help SodaSync detect the feature pair of an incoming web request.
     * You only need to add this, if you process incoming requests and the source system does not support multiple
     * trigger urls.
     */
    featurePairDetector?: FeaturePairDetector;

    /**
     * If you need to authenticate using OAuth 2 that uses redirection, you can provide an OAuth2Client.
     */
    oauth2Client?: OAuth2Client;
}
