import React, { FC, useEffect, useRef } from 'react'

type AutoSaveProps = {
  form: {
    handleSubmit: () => Promise<void>
  }
}

const AutoSave: FC<AutoSaveProps> = ({ form }) => {
  const handleSubmitRef = useRef(form.handleSubmit)

  useEffect(() => {
    handleSubmitRef.current = form.handleSubmit
  }, [form.handleSubmit])

  useEffect(() => {
    const interval = setInterval(() => {
      void handleSubmitRef.current()
    }, 500)

    return (): void => clearInterval(interval)
  }, [])

  return <></>
}

export default AutoSave
