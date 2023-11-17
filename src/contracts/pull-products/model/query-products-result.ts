import {zQueryResult} from "../../common/model/query-result";
import {z} from "zod";
import {ZProductDto} from "../../products/product-dto";

export const ZQueryProductsResult = zQueryResult(ZProductDto);

/* The query products result */
export type QueryProductsResult = z.infer<typeof ZQueryProductsResult>;
