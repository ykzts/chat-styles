import localForage from 'localforage'
import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useEffect, useState } from 'react'

type Set<T> = Dispatch<SetStateAction<T>>

function useStorage<T = unknown>(
  key: string,
  initialValue: T
): [T, Set<T>, () => void] {
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    localForage
      .getItem<T>(key)
      .then((newValue) => {
        if (newValue !== null) {
          setValue(newValue)
        }
      })
      .catch(() => {
        // do nothing
      })
  }, [key])

  const set = useCallback<Set<T>>(
    (newValue) => {
      const val =
        typeof newValue === 'function'
          ? (newValue as (prevState: T | undefined) => T | undefined)(value)
          : newValue

      if (val !== undefined) {
        localForage
          .setItem<T>(key, val)
          .then(setValue)
          .catch(() => {
            // do nothing
          })
      }
    },
    [value, key]
  )

  const remove = useCallback(() => {
    localForage.removeItem(key).catch(() => {
      // do nothing
    })
  }, [key])

  return [value, set, remove]
}

export default useStorage
