import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// 自作したgetSortedPostsData（idおよび、並べ替えられたdata）をインポート
import { getSortedPostsData } from '../lib/posts'
// import Link from 'next/link'
import Link from 'next/link'
import styles from '../components/layout.module.css' // stylesという名前でlayout.module.cssからインポート


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
  const name = 'Naoki Hino'
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    {/* プロフィール */}
      <h1>Profile</h1>
      <section className={styles.profile}>
        <div>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1>{name}</h1>
        </div>
        <div className={utilStyles.headingMd}>
          <p>フロントエンドエンジニアを目指しています。Next.js勉強中。</p>
        </div>
      </section>
    {/* スキル */}
      <h1>Skill</h1>
      <section className={styles.main}>
        <div className={styles.item}>
          <h2 className={utilStyles.headingLg}>HTML</h2>
          <div className={styles.img}>
            <img src="/images/html-5.svg" />
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={utilStyles.headingLg}>CSS</h2>
          <div className={styles.img}>
            <img src="/images/css-3.svg" />
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={utilStyles.headingLg}>Sass</h2>
          <div className={styles.img}>
            <img src="/images/sass.svg" />
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={utilStyles.headingLg}>JavaScript</h2>
          <div className={styles.img}>
            <img src="/images/javascript.svg" />
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={utilStyles.headingLg}>React</h2>
          <div className={styles.img}>
            <img src="/images/react.svg" />
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={utilStyles.headingLg}>Next.js</h2>
          <div className={styles.img}>
            <img src="/images/nextjs.svg" />
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={utilStyles.headingLg}>node.js</h2>
          <div className={styles.img}>
            <img src="/images/nodejs.svg" />
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={utilStyles.headingLg}>Firebase</h2>
          <div className={styles.img}>
            <img src="/images/firebase.svg" />
          </div>
        </div>
      </section>
    {/* ポートフォリオ */}
        <h1>Portfolio</h1>
      <section className={styles.main2}>
        <Link href="https://next-js-tutorial.naokihino178.vercel.app">
          <button className={styles.item2}>
            <h2 className={utilStyles.headingLg}>BlogApp</h2>
          </button>
        </Link>
        <Link href="/blog">
          <button className={styles.item2}>
            <h2 className={utilStyles.headingLg}>TodoApp</h2>
          </button>
        </Link>
        <Link href="/ChatApp">
          <button className={styles.item2}>
            <h2 className={utilStyles.headingLg}>ChatApp</h2>
          </button>
        </Link>
        <Link href="/KakeiboApp">
          <button className={styles.item2}>
            <h2 className={utilStyles.headingLg}>KakeiboApp</h2>
          </button>
        </Link>
      </section>
    </Layout>
  )
}
// Layoutコンポーネントですべてラッピングすることによって、レイアウトはここでは記述せず、純粋に表示するものだけを記述している