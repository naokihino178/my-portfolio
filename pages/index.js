import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// 自作したgetSortedPostsData（idおよび、並べ替えられたdata）をインポート
import { getSortedPostsData } from '../lib/posts'
// import Link from 'next/link'
import Link from 'next/link'
import styles from '../components/layout.module.css' // stylesという名前でlayout.module.cssからインポート

import Profile from './Profile'
import Skill from './Skill'
import Portfolio from './Portfolio'
import Contact from './Contact'

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
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {/* プロフィール */}
        <Profile />
      </>
  )
}
// Layoutコンポーネントですべてラッピングすることによって、レイアウトはここでは記述せず、純粋に表示するものだけを記述している