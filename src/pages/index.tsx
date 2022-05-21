import Head from 'next/head'

import { Test } from '@/component/Test/Test'

export const Home = () => (
  <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      <meta name="description" content="Nextjs Starter Kit" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Test />
    <main>
      Hello World
    </main>

    <footer>
      Footer here
    </footer>
  </>
)

export default Home
