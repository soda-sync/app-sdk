export interface Url {
  scheme?: string;
  host?: string;
  port: number;
  user?: string;
  pass?: string;
  path?: string;
  query: { [key: string]: string | string[] };
  fragment?: string;
}
