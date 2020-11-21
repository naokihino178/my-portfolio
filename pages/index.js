import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>日野です。趣味はギターです。最近作曲の勉強を始め、年内にオリジナルソングを一曲作ることが目標です。よろしくお願いします。
        </p>
        <p>
          <a href="https://bz-vermillion.com/">私が最も好きなアーティストのサイトはこちら</a>
        </p>
      </section>
    </Layout>
  )
}
// Layoutコンポーネントですべてラッピングすることによって、レイアウトはここでは記述せず、純粋に表示するものだけを記述している