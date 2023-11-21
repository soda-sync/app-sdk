import {zField, zObjectPropertyPath} from "../../../sdk/types";

import {z} from "zod";

export enum PatchOperation {
    /**
     * Overwrite the old value with the new one.
     *
     * @example
     * ```
     * | old | new |
     * | --- | --- |
     * |     | B   |
     * | A   | B   |
     * | A   |     |
     * | [A] | [B] |
     * | [A] | []  |
     * ```
     */
    Set = 'set',

    /**
     * Add the new value to the old value.
     *
     * @example
     * ```
     * | old | new  |
     * | --- | ---- |
     * | A   | AB   |
     * | []  | [B]  |
     * | [A] | [AB] |
     * ```
     */
    Append = 'append',

    /**
     * Remove the old value.
     *
     * @example
     * ```
     * | old    | new    |
     * | ------ | ------ |
     * | A      | <null> |
     * |        | <null> |
     * | <null> | <null> |
     * ```
     */
    Remove = 'remove',
}

export const ZPatchOperation = z.nativeEnum(PatchOperation);

export function zRemovePatcher<T extends z.ZodRawShape>(obj: z.ZodObject<T>) {
    return z.object({
        field: zObjectPropertyPath(obj, false),
        operation: z.literal(PatchOperation.Remove),
    });
}

export function zAppendPatcher<T extends z.ZodRawShape>(obj: z.ZodObject<T>) {
    return zField(obj, false).extend({
        operation: z.literal(PatchOperation.Append),
    });
}

export function zSetPatcher<T extends z.ZodRawShape>(obj: z.ZodObject<T>) {
    return zField(obj, false).extend({
        operation: z.literal(PatchOperation.Set),
    });
}

export function zPatcher<T extends z.ZodRawShape>(obj: z.ZodObject<T>) {
    return z.union([
        zRemovePatcher(obj),
        zAppendPatcher(obj),
        zSetPatcher(obj),
    ])
}

export function zPatcherArray<T extends z.ZodRawShape>(obj: z.ZodObject<T>) {
    return z.array(zPatcher(obj)).nonempty();
}
