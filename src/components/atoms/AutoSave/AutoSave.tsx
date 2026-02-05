import React, { FC, useEffect, useEffectEvent } from 'react'

type AutoSaveProps = {
  form: {
    handleSubmit: () => Promise<void>
  }
}

const AutoSave: FC<AutoSaveProps> = ({ form }) => {
  const onSubmit = useEffectEvent(() => {
    void form.handleSubmit()
  })

  useEffect(() => {
    const interval = setInterval(onSubmit, 500)

    return (): void => clearInterval(interval)
  }, [])

  return <></>
}

export default AutoSave
