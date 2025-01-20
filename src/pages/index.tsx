import { styled } from '@compiled/react'
import Layout from 'components/Layout'
import Link from 'next/link'

const H1 = styled.h1`
  font-weight: bold;
`

const Index = () => (
  <Layout>
    <H1>Hello Next.js 👋</H1>
    <p>
      <Link href="/about" prefetch={false}>
        Go to About page
      </Link>
    </p>
  </Layout>
)

export default Index
