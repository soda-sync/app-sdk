import {Field, Join} from "../../../sdk/types";

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

export type RemovePatcher<TPath extends Join<string[], '.'>> = {
    field: TPath,
    operation: PatchOperation.Remove,
}

export type AppendPatcher<TPath extends Join<string[], '.'>> = Field<TPath> & {
    operation: PatchOperation.Append,
}

export type SetPatcher<TField extends Join<string[], '.'>> = Field<TField> & {
    operation?: PatchOperation.Set,
}

export type Patcher<TField extends Join<string[], '.'>> =
    RemovePatcher<TField>
    | AppendPatcher<TField>
    | SetPatcher<TField>;
