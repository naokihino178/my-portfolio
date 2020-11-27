import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// 自作したgetSortedPostsData（idおよび、並べ替えられたdata）をインポート
import { getSortedPostsData } from '../lib/posts'
// import Link from 'next/link'
import Link from 'next/link'
import Date from '../components/date'

// getStaticPropsはpageコンポーネントでのみ使用可能
// getStaticPropを使っているということは、Next.jsに、「このページはデータの依存関係を持っている。
// したがって、ビルド時にこのページをpre-renderしたいのであれば、最初にデータをとってきて、
// 次にこの処理するという流れをやってくれよな」と伝える役割もある
// getStaticProps...ビルド時に実行、静的ファイルを事前に生成するためのAPI
// =※重要※=> 必ず事前にサーバーサイドで実行される。クライアント側で実行されることはない。
// 再ビルドしない限りいつアクセスしても同じ結果です。時刻やスター数はあくまでビルド時のものです。（GitHubのスター取得のやつからコピペしてきた）
export async function getStaticProps() {
  // 3. 変数allPostsDataにgetSortedPostsData()を代入
  // => props: {allPostData}を返す
  // => Homeコンポーネントにpropsを渡し、表示
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// 4. allPostDataをHomeコンポーネントで受け取り、表示
export default function Home ({ allPostsData }) { // このallPostsDataはどこから来たんや？上からか？なぜ渡せる？→分割代入？？※要復習！！
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>こんにちは。Next.jsを勉強中です。よろしくお願いします。
        </p>
        <p>
          <a href="https://bz-vermillion.com/">私が最も好きなアーティストのサイトはこちら</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* allPoatsDataをmapで回す */}
          {allPostsData.map(({ id, date, title }) => ( // この引数もよくわからん、要確認！！
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              {/* ↑as使わんでも行けるようになった？？<Link href="/posts/[id]" as={`/posts/${id}`}> */}
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      {/* <h2>
            <Link href="/posts/first-post">
            <a>Go to page</a>
            </Link>
      </h2> */}
      
    </Layout>
  )
}
// Layoutコンポーネントですべてラッピングすることによって、レイアウトはここでは記述せず、純粋に表示するものだけを記述している