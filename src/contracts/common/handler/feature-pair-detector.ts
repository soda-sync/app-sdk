import {HttpRequest} from "../../../bindings/http/http-request";
import {AppFeature} from "../../../sdk/types";

/**
 * If a requesting system only supports one URL for multiple actions (For example when using a ?action parameter)
 * you can implement this interface for helping soda sync detecting the feature pair.
 */
export interface FeaturePairDetector {

    /**
     * Detect the feature based on the incoming http request.
     *
     * @returns The first element of the return value is the source feature (for example orders-request) and the second element is the target feature (for example orders-provide). Null is returned if the feature pair could not be detected.
     */
    detect(request: HttpRequest): [AppFeature, AppFeature] | null;
}
