import { useFormikContext } from 'formik'
import React, { FC, useEffect } from 'react'

const AutoSave: FC = () => {
  const { submitForm } = useFormikContext()

  useEffect(() => {
    const interval = setInterval(() => {
      submitForm()
    }, 500)

    return (): void => clearInterval(interval)
  }, [submitForm])

  return <></>
}

export default AutoSave
