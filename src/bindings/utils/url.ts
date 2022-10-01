/**
 * Represents a url
 */
export interface Url {
  scheme?: Nullable<string>;
  host?: Nullable<string>;
  port: number;
  user?: Nullable<string>;
  pass?: Nullable<string>;
  path?: Nullable<string>;
  query: { [key: string]: string | string[] };
  fragment?: Nullable<string>;
}
