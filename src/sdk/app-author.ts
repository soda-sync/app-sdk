import {z} from "zod";

export const ZAppAuthor = z.object({
    /* The name of an individual person or a company name */
    name: z.string(),
    /* The contact email address. Users can contact you using this email address. */
    email: z.string().email(),
});

/* Represents the author of the app. */
export type AppAuthor = z.infer<typeof ZAppAuthor>;
