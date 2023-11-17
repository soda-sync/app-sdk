import {z} from "zod";

export const ZTaxRate = z.number().nonnegative().lte(100);
