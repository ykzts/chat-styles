import { type FC, type ReactElement, type ReactNode } from 'react'

interface Props {
  actions?: ReactNode
  children: ReactNode
  icon?: string | ReactElement
}

const Headline: FC<Props> = ({ actions, children, icon }) => {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center">
      <h2 className="flex items-center flex-grow flex-shrink-0 text-base font-normal mb-2 sm:mb-0">
        {icon && <div className="flex items-center mr-1">{icon}</div>}
        {children}
      </h2>

      {actions && <div className="pl-0 sm:pl-4">{actions}</div>}
    </header>
  )
}

export default Headline
