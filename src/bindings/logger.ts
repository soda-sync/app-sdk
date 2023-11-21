export interface Logger {
    /**
     * Log a debug message. Note that these messages are not logged in production.
     */
    debug(message: string): void;

    /**
     * Log a info message.
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
