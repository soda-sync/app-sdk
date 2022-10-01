export interface Logger {
  /**
   * Log a debug message. Not that these messages are not logged in production.
   */
  debug(message: string): void;

  /**
   * Log an info message.
   */
  info(message: string): void;

  /**
   * Log a warning message.
   */
  warning(message: string): void;

  /**
   * Log a error message.
   */
  error(message: string): void;

}
