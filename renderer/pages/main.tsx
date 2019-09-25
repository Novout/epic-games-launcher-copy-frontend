import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const MainPage: NextPage = () => {
  return (
    <Layout title="">
      <h1>Hello SUA PUTA 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default MainPage
