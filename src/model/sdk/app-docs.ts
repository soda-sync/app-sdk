import {FeatureTriggerUrls} from './types';
import {SetupStep} from './docs';

/**
 * Documentation for the user
 */
export interface AppDocs {
  /**
   * A function to generate the setup steps for connections.
   * Example:
   * If your app can request orders from other systems, the user needs to enter a trigger url which is called from your
   * system to fetch the data. This trigger url is contained in the triggerUrls parameter.
   */
  connectionSetupSteps?: Nullable<(triggerUrls: FeatureTriggerUrls) => SetupStep[]>,
}
