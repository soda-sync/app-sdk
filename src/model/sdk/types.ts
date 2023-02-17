export type AppVersion = `${number}.${number}.${number}`;

export type DateTimeString = string;

export type AppFeature =
    'orders-request' /** @see OrderRequester */
    | 'orders-provide'  /** @see OrderProvider */
    ;

export type FeatureTrigger = {
    sourceFeature: AppFeature,
    targetFeature: AppFeature,
    url: string,
};
export type FeatureTriggers = Array<FeatureTrigger>;
