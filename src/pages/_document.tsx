import { Head, Html, Main, NextScript } from 'next/document'
import ShareTechMonoFont from '../headComponents/Font'
import FontAwesome from '../headComponents/Icons'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ShareTechMonoFont />
        <FontAwesome />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
