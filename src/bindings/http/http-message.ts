export interface HttpMessage {
  headers: { [name: string]: string };
  body?: Nullable<string>;
}
