/**
 * Represents a single form field.
 */
export interface FormField {
  /**
   * The field caption
   */
  caption: string;

  /**
   * The field type
   */
  type: 'text' | 'email' | 'password' | 'url' | 'checkbox';

  /**
   * Mark this field as required.
   */
  required: boolean;

  /**
   * A custom validator for this field.
   * @param value The current field value.
   * @returns An error message or null if the value is valid.
   */
  customValidator?: (value: any) => string | null;
}
