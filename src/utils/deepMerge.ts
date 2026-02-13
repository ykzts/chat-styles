/**
 * Deep merge utility to merge partial data with default values
 * This ensures backward compatibility when new properties are added to the schema
 */
export const deepMerge = <T extends Record<string, unknown>>(
  target: T,
  source: Partial<T> | null | undefined
): T => {
  if (!source) {
    return target
  }

  const result = { ...target }

  for (const key in source) {
    const sourceValue = source[key]
    const targetValue = result[key]

    if (
      sourceValue &&
      typeof sourceValue === 'object' &&
      !Array.isArray(sourceValue) &&
      targetValue &&
      typeof targetValue === 'object' &&
      !Array.isArray(targetValue)
    ) {
      // Recursively merge nested objects
      result[key] = deepMerge(
        targetValue as Record<string, unknown>,
        sourceValue as Record<string, unknown>
      ) as T[Extract<keyof T, string>]
    } else if (sourceValue !== undefined) {
      // Use source value if it exists
      result[key] = sourceValue as T[Extract<keyof T, string>]
    }
  }

  return result
}
