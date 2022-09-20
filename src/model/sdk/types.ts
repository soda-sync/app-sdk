export type AppVersion = `${number}.${number}.${number}`;

export type AppFeature =
  /** @see OrderRequester */
  'orders-request'
  /** @see OrderProvider */
  | 'orders-provide'
;

