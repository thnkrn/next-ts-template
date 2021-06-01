import { styled } from '@compiled/react'
import Layout from 'components/Layout'
import Link from 'next/link'

const H1 = styled.h1`
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <H1>Hello Next.js 👋</H1>
    <p>
      <Link href="/about" prefetch={false}>
        <a>Go to About page</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
