import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// 自作したgetSortedPostsDataをインポート
import { getSortedPostsData } from '../lib/posts'

// getStaticPropsはpageコンポーネントでのみ使用可能
// getStaticPropを使っているということは、Next.jsに、「このページはデータの依存関係を持っている。
// したがって、ビルド時にこのページをpre-renderしたいのであれば、最初にデータをとってきて、
// 次にこの処理するという流れをやってくれよな」と伝える役割もある
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
// Layoutコンポーネントですべてラッピングすることによって、レイアウトはここでは記述せず、純粋に表示するものだけを記述している