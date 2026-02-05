import React, { FC, useEffect } from 'react'

type AutoSaveProps = {
  form: {
    handleSubmit: () => Promise<void>
  }
}

const AutoSave: FC<AutoSaveProps> = ({ form }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      void form.handleSubmit()
    }, 500)

    return (): void => clearInterval(interval)
  }, [form])

  return <></>
}

export default AutoSave
