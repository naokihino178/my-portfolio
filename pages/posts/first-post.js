import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout> {/* <Layout></Layout>で囲む！！ →layout.jsとlayout.module.cssで内部がいろいろいじられる*/}
        <Head>
        <title>pages/first-postのページタイトルだよ</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
  )
}