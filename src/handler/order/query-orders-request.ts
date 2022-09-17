export interface QueryOrdersRequest {
  page: number;
  pageSize: number;
  minUpdatedAt?: Date;
  attributes?: { [key: string]: any },
}
