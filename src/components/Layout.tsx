import { styled } from '@compiled/react'
import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
}

const Header = styled.header`
  margin-bottom: 20px;
`

const Footer = styled.footer`
  margin-top: 20px;
`

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about" prefetch={false}>
          <a>About</a>
        </Link>{' '}
        |{' '}
      </nav>
    </Header>
    {children}
    <Footer>
      <hr />
      <span>Footer Here</span>
    </Footer>
  </div>
)

export default Layout
