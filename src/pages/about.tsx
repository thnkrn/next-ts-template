import { styled } from '@compiled/react'
import Layout from 'components/Layout'
import Link from 'next/link'

const H1 = styled.h1`
  font-weight: bold;
`

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <H1>About</H1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go to homepage</a>
      </Link>
    </p>
  </Layout>
)
export default AboutPage
