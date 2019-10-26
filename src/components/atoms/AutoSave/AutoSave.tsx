import { useFormikContext } from 'formik'
import React, { FC, ReactElement, useEffect } from 'react'

const AutoSave: FC = (): ReactElement => {
  const { submitForm } = useFormikContext()

  useEffect((): (() => void) => {
    const interval = setInterval(() => {
      submitForm()
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <></>
}

export default AutoSave
