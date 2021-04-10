import { useFormikContext } from 'formik'
import type { VFC } from 'react'
import { useEffect } from 'react'

const AutoSave: VFC = () => {
  const { submitForm } = useFormikContext()

  useEffect(() => {
    const interval = setInterval(() => {
      void submitForm()
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [submitForm])

  return null
}

export default AutoSave
