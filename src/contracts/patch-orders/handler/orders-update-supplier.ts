import {HttpRequest} from "../../../bindings/http/http-request";
import {RawPatchOrdersRequest} from "../../orders/patch-orders-request";
import {OrderDto} from "../../orders/order-dto";
import {RawHttpResponse} from "../../../bindings/http/http-response";

/**
 * This is the caller side of the contract.
 *
 * @remarks
 * 1. The processUpdateRequest method converts the raw http request into an PatchOrdersRequest
 * 2. The PatchOrdersRequest is processed by the other system which returns the OrderDto for the patched order
 * 3. The provideUpdatedOrder method converts the OrderDto to a response that is suitable for the requesting system.
 */
export interface OrdersUpdateSupplier {

    /**
     * Handle the incoming request and transform it to a QueryOrdersRequest.
     *
     * @param request - The raw http request to process.
     * @returns The PatchOrdersRequest
     *
     * @example
     * Raw http request:
     * ```http
     * POST /order_id=1234
     * Content-Type: application/json
     *
     * {
     *    "state": 1,
     *    "customer_update": {
     *      "name": "John"
     *    }
     * }
     * ```
     *
     * PatchOrdersRequest:
     * ```typescript
     * {
     *     filters: [
     *         {field: 'id', operation: FilterOperation.Equal, value: enforce<OrderDto["id"]>('1234')}
     *     ],
     *     fields: [
     *         {field: 'status', operation: PatchOperation.Set, value: enforce<OrderDto["status"]>('PROCESSING')},
     *         {field: 'deliveryAddress.firstName', operation: PatchOperation.Set, value: enforce<AddressDto["firstName"]>('John')},
     *         {field: 'invoiceAddress.firstName', operation: PatchOperation.Set, value: enforce<AddressDto["firstName"]>('John')},
     *     ],
     * }
     * ```
     */
    processUpdateRequest(request: HttpRequest): Promise<RawPatchOrdersRequest>;

    /**
     * Convert the updated orders to valid http response.
     *
     * @param orders - The updated orders.
     */
    provideUpdatedOrders(orders: OrderDto[]): Promise<RawHttpResponse>;
}
