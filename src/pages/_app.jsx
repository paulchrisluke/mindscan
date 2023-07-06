import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
  <title>Mindscan - An Open-source MRI Dataset for Advancing AI Research in Brain Mapping</title>
  <meta
    name="description"
    content="Mindscan provides an extensive open-source dataset of MRI brain scans, designed to propel the field of artificial intelligence (AI) research in brain mapping. Delve into a vast collection of anonymized brain images, empowering researchers and developers to train cutting-edge AI algorithms for unraveling the complexities of the human mind. Explore, analyze, and contribute to the future of neuroscience with Mindscan, an invaluable resource for AI-driven advancements in brain mapping and understanding."
  />
</Head>

      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MDXProvider components={mdxComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}
