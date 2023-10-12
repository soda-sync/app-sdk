export interface AuthRequest {
    /**
     * The URL where the user needs to get redirected for authentication.
     */
    authUrl: string;

    /**
     * A key-value set of state relevant data.
     */
    state: Record<string, string>;
}
