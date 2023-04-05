export interface Integration {
  /**
   * Check the configuration. If the configuration is invalid, throw an exception.
   */
  checkConfiguration(): Promise<void>;
}
