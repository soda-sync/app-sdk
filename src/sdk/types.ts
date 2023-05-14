export type AppVersion = `${number}.${number}.${number}`;

export type DateTimeString = string;

export type AppFeature =
    'orders-request' /** @see OrderRequester */
    | 'orders-provide'  /** @see OrderProvider */
    | 'order-request' /** @see SingleOrderRequester */
    | 'order-provide'  /** @see SingleOrderProvider */
    ;

export type FeatureTrigger = {
    sourceFeature: AppFeature,
    targetFeature: AppFeature,
    url: string,
};

export type FeatureTriggers = Array<FeatureTrigger>;

export type NestedProperties<T> = T extends string ? [] : {
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
