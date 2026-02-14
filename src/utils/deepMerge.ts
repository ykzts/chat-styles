/**
 * Deep merge utility to merge partial data with default values
 * This ensures backward compatibility when new properties are added to the schema
 *
 * @param defaults - The complete default configuration object
 * @param overrides - Partial user data that may be missing new properties
 * @returns A new object with user preferences preserved and missing properties filled with defaults
 *
 * @example
 * const defaults = { a: 1, b: { c: 2, d: 3 } }
 * const userPrefs = { b: { c: 5 } }
 * const result = deepMerge(defaults, userPrefs)
 * // Result: { a: 1, b: { c: 5, d: 3 } }
 */
export const deepMerge = <T extends Record<string, unknown>>(
  defaults: T,
  overrides: Partial<T> | null | undefined
): T => {
  if (!overrides) {
    return defaults
  }

  const result = { ...defaults }

  for (const key in overrides) {
    if (!Object.prototype.hasOwnProperty.call(overrides, key)) {
      continue
    }

    const overrideValue = overrides[key]
    const defaultValue = result[key]

    if (
      overrideValue !== null &&
      typeof overrideValue === 'object' &&
      !Array.isArray(overrideValue) &&
      defaultValue !== null &&
      typeof defaultValue === 'object' &&
      !Array.isArray(defaultValue)
    ) {
      // Recursively merge nested objects
      result[key] = deepMerge(
        defaultValue as Record<string, unknown>,
        overrideValue as Record<string, unknown>
      ) as T[Extract<keyof T, string>]
    } else if (overrideValue !== undefined) {
      // Use override value if it exists
      result[key] = overrideValue as T[Extract<keyof T, string>]
    }
  }

  return result
}
