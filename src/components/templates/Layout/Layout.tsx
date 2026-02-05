import { type FC, type ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import Footer from 'components/molecules/Footer'

type Props = {
  children: ReactNode
  title: string
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`}>
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?display=swap&amp;family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Inconsolata"
          rel="stylesheet"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 text-white">
          <div className="px-4 py-4">
            <h1 className="text-xl font-semibold truncate">{title}</h1>
          </div>
        </header>

        {children && (
          <div className="container mx-auto px-4 mt-8">{children}</div>
        )}

        <Footer />
      </div>
    </>
  )
}

export default Layout
