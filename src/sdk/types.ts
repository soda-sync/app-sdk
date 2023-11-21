import {OrderRequester} from "../contracts/pull-orders/handler/order-requester";
import {Integration} from "./integration";
import {OrderProvider} from "../contracts/pull-orders/handler/order-provider";
import {SingleOrderRequester} from "../contracts/pull-order/handler/single-order-requester";
import {SingleOrderProvider} from "../contracts/pull-order/handler/single-order-provider";
import {ProductRequester} from "../contracts/pull-products/handler/product-requester";
import {ProductProvider} from "../contracts/pull-products/handler/product-provider";
import {OrdersUpdateSupplier} from "../contracts/patch-orders/handler/orders-update-supplier";
import {OrdersUpdateConsumer} from "../contracts/patch-orders/handler/orders-update-consumer";
import {PushProductsSupplier} from "../contracts/push-products/handler/push-products-supplier";
import {PushProductsConsumer} from "../contracts/push-products/handler/push-products-consumer";
import {ProductsUpdateSupplier} from "../contracts/patch-products/handler/products-update-supplier";
import {ProductsUpdateConsumer} from "../contracts/patch-products/handler/products-update-consumer";
import {z} from "zod";

export const ZAppVersion = z.custom<`${number}.${number}.${number}`>((val) =>
    /^\d+\.\d+\.\d+$/g.test(val as string)
);

export type AppVersion = z.infer<typeof ZAppVersion>;

export const ZSdkVersion = z.custom<`${number}.${number}.${number}` | `${number}.${number}.${number}-${string}.${number}`>((val) =>
    /^\d+\.\d+\.\d+(-(alpha|beta|rc)\.\d+)?$/g.test(val as string)
);
export type SdkVersionT = z.infer<typeof ZSdkVersion>;

export const ZDateTimeString = z.string();
export type DateTimeString = z.infer<typeof ZDateTimeString>;

export type AppFeatureMapping = {
    'orders-request': OrderRequester,
    'orders-provide': OrderProvider,
    'orders-update-supply': OrdersUpdateSupplier,
    'orders-update-consume': OrdersUpdateConsumer,
    'order-request': SingleOrderRequester,
    'order-provide': SingleOrderProvider,
    'products-request': ProductRequester,
    'products-provide': ProductProvider,
    'products-supply': PushProductsSupplier,
    'products-consume': PushProductsConsumer,
    'products-update-supply': ProductsUpdateSupplier,
    'products-update-consume': ProductsUpdateConsumer,
};

export type AppFeature = keyof AppFeatureMapping;

export type AppFactory = (feature?: AppFeature) => Integration | (Integration & AppFeatureMapping[AppFeature]);

export type FeatureTrigger = {
    sourceFeature: AppFeature,
    targetFeature: AppFeature,
    url: string,
};

export type FeatureTriggers = Array<FeatureTrigger>;

export function zObjectPropertyPath<T extends z.ZodRawShape>(obj: z.ZodObject<T>, arrayDeepInclude: boolean) {
    function getPaths(obj: z.ZodObject<any>, currentPath: string[] = [], pathsOut: string[] = []): [string, ...string[]] {
        let values = obj.keyof()._def.values as string[];
        for (let k of values) {
            let next = obj.shape[k!];
            while (arrayDeepInclude && next instanceof z.ZodArray) {
                next = (next as z.ZodArray<any, any>)._def.type;
            }
            let nextPath = [...currentPath, k];
            if (next instanceof z.ZodObject) {
                getPaths(next, nextPath, pathsOut);
            } else {
                pathsOut.push(nextPath.join("."));
            }
        }
        return pathsOut as [string, ...string[]];
    }

    let paths = getPaths(obj, [], []);
    return z.enum(paths);
}

export enum FilterOperation {
    Equal = 'eq',
    NotEqual = 'neq',
    GreaterThanOrEqual = 'gte',
    LowerThanOrEqual = 'lte',
    GreaterThan = 'gt',
    LowerThan = 'lt',
}

export function zField<T extends z.ZodRawShape>(obj: z.ZodObject<T>, arrayDeepInclude: boolean) {
    return z.object({
        field: zObjectPropertyPath(obj, arrayDeepInclude),
        value: z.unknown(),
    })
}

export function zFilter<T extends z.ZodRawShape>(obj: z.ZodObject<T>) {
    return zField(obj, true).extend({
        operation: z.nativeEnum(FilterOperation),
    });
}

/**
 * Enforce a specific type for an inline value.
 * @param val - The value
 * @returns The value
 */
export function enforce<T>(val: T): T {
    return val;
}
