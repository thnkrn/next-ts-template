import { styled } from '@compiled/react'
import Layout from 'components/Layout'
import Link from 'next/link'

const H1 = styled.h1`
  font-weight: bold;
`

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`

const Text = styled.span`
  color: red;
`

const Text2 = styled.p``

const Index = () => {
  return (
    <Layout>
      <H1>Hello Next.js 👋</H1>
      <p>
        <Link href="/about" prefetch={false}>
          Go to About page
        </Link>
      </p>

      <Container>
        <Text>1234</Text>
        <Text2>5678</Text2>
      </Container>
    </Layout>
  )
}

export default Index
