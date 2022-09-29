export type AppVersion = `${number}.${number}.${number}`;

export type DateTimeString = string;

export type AppFeature =
  /** @see OrderRequester */
  'orders-request'
  /** @see OrderProvider */
  | 'orders-provide'
;

