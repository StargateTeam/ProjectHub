import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { LoadingContext, loadingInitalState } from '@/contexts/Loading'
class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            <LoadingContext.Provider value={loadingInitalState}>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </LoadingContext.Provider>
          </>
        )
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      throw error
    } finally {
      sheet.seal()
    }
  }
}

export default CustomDocument
