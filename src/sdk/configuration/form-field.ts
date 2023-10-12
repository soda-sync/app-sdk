
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
  type: 'text' | 'email' | 'password' | 'url' | 'checkbox' | 'hidden';

  /**
   * Mark this field as required.
   */
  required: boolean;

  /**
   * Set this to true if this field contains sensitive information.
   * If this is set to true, the current field value is not getting transferred to the frontend.
   */
  isSecret?: boolean;

  /**
   * A validator function for this field.
   * @param value - The current field value.
   * @returns An error message or null if the value is valid.
   */
  validator?: (value: any) => string | null;
}
