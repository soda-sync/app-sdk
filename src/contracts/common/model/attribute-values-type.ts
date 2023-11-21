import {z} from "zod";

export const ZAttributeValues = z.record(
    z.string(),
    z.unknown(),
).default({});

/* Custom data */
export type AttributeValues = z.infer<typeof ZAttributeValues>;
