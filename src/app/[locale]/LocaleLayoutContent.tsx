import Layout from 'components/templates/Layout'
import IntlProvider from 'providers/IntlProvider'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayoutContent({ children, params }: Props) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <head>
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
      </head>
      <body>
        <IntlProvider locale={locale}>
          <Layout title="Chat Styles">{children}</Layout>
        </IntlProvider>
      </body>
    </html>
  )
}
