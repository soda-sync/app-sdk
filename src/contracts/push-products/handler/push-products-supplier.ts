import {HttpRequest} from "../../../bindings/http/http-request";
import {HttpResponse} from "../../../bindings/http/http-response";
import {ProductPushContainerDto} from "../model/product-push-container-dto";

/**
 * Implement this interface for APIs that can provide products.
 */
export interface PushProductsSupplier {
    /**
     * Handle the incoming request and transform it to a list of ProductPushContainerDto
     * @param request - The raw http request
     */
    processPushProductsRequest(request: HttpRequest): Promise<ProductPushContainerDto[]>;

    /**
     * Transform the pushed products to a valid http response.
     *
     * @param products - The pushed products
     */
    providePushedProducts(products: ProductPushContainerDto[]): Promise<HttpResponse>;
}
