import {OrderRequester} from "../contracts/pull-orders/handler/order-requester";
import {Integration} from "./integration";
import {OrderProvider} from "../contracts/pull-orders/handler/order-provider";
import {SingleOrderRequester} from "../contracts/pull-order/handler/single-order-requester";
import {SingleOrderProvider} from "../contracts/pull-order/handler/single-order-provider";
import {ProductRequester} from "../contracts/pull-products/handler/product-requester";
import {ProductProvider} from "../contracts/pull-products/handler/product-provider";

export type AppVersion = `${number}.${number}.${number}`;

export type DateTimeString = string;

export type AppFeatureMapping = {
    'orders-request': OrderRequester,
    'orders-provide': OrderProvider,
    'order-request': SingleOrderRequester,
    'order-provide': SingleOrderProvider,
    'products-request': ProductRequester,
    'products-provide': ProductProvider,
};
export type AppFeature = keyof AppFeatureMapping;

export type AppFactory = (feature?: AppFeature) => Integration | (Integration & AppFeatureMapping[AppFeature]);

export type FeatureTrigger = {
    sourceFeature: AppFeature,
    targetFeature: AppFeature,
    url: string,
};

export type FeatureTriggers = Array<FeatureTrigger>;

export type NestedProperties<T> = T extends string | unknown[] ? [] : {
    [K in Extract<keyof T, string>]: [K, ...NestedProperties<T[K]>]
}[Extract<keyof T, string>];

export type Join<T extends string[], D extends string> =
    T extends []
        ? never
        : T extends [infer F]
            ? F
            : T extends [infer F, ...infer R]
                ? F extends string
                    ? `${F}${D}${Join<Extract<R, string[]>, D>}`
                    : never
                : string;

export enum FilterOperation {
    Equal = 'eq',
    NotEqual = 'neq',
    GreaterThanOrEqual = 'gte',
    LowerThanOrEqual = 'lte',
    GreaterThan = 'gt',
    LowerThan = 'lt',
}

export type Filter<T, TField extends Join<string[], '.'>> = {
    field: TField,
    operation: FilterOperation,
    value: unknown,
}
