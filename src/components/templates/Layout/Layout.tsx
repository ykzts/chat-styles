import { type FC, type ReactNode } from 'react'
import Link from 'next/link'
import Footer from 'components/molecules/Footer'

type Props = {
  children: ReactNode
  title: string
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold truncate">
              <Link href="/" className="hover:opacity-80">
                {title}
              </Link>
            </h1>
            <nav>
              <Link
                href="/usage"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded transition-colors text-sm font-medium"
              >
                使い方
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {children && (
        <div className="container mx-auto px-4 mt-8">{children}</div>
      )}

      <Footer />
    </div>
  )
}

export default Layout
