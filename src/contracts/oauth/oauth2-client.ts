import {AuthRequest, RawAuthRequest} from "./model/auth-request";
import {HttpRequest} from "../../bindings/http/http-request";

/**
 * Implement this interface for OAuth 2 APIs that use Authorization Code Grant.
 *
 * The protocol flow is described in https://datatracker.ietf.org/doc/html/rfc6749#section-4.1
 *  - generateAuthRequest -> A-C in the RFC
 *  - exchangeGrant -> D-E in the RFC
 *
 * Storing Access Tokens:
 *   To store the access tokens as secure as possible you need to create a field in your configuration with
 *   {isSecret: true}. This ensures that the access token is never transferred to the frontend but to your app.
 *   To set or update access tokens you can use SodaSync.context.config as usual.
 */
export interface OAuth2Client {
    /**
     * This method is called to initiate the OAuth 2 flow.
     *
     * @param redirectUrl - The url for redirecting the user back.
     * @param state - The state string
     */
    generateAuthRequest(redirectUrl: string, state: string): RawAuthRequest;

    /**
     * This method is called after the user was redirected back from the external system.
     * It should exchange authorization code with an access token.
     *
     * @param request - The raw http request that contain the URL with all parameters such as code.
     * @param state - The state data from the AuthRequest
     */
    exchangeGrant(request: HttpRequest, state: AuthRequest["state"]): void;
}
