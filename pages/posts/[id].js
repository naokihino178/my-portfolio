import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
  // [
  //   {
  //     params: {
  //       id: '200101'
  //     }
  //   },
  //   {
  //     params: {
  //       id: '200401'
  //     }
  //   }
  // ]
  // をインポート
  import { getAllPostIds, getPostData } from '../../lib/posts'

  // getStaticPropsからpostDataを受け取って表示
  export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* ↓本文を表示↓ */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </Layout>
    )
  }

  // 3⃣. ビルド時にレンダリングする必要のあるパス（事前ビルドしたいパス）のリストを生成する
  // idとして取り得る値のリストを返す
  // paths: 事前ビルドするパス対象を指定するパラメータ
  // fallback: 事前ビルドしたパス以外にアクセスしたときのパラメータ true: カスタム404pageを表示 false
  // (たぶん)ここでparamsを返して、下のgetStaticProps渡す！？かな？？
  export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths, // => params: {id: '200101'} と　{id: '200401'}
      fallback: false
    }
  }
  // ビルド時に静的なファイルを生成し、ページコンポーネントで使用する値を用意する
  // paramsには上記pathsで指定した値が入る（1postずつ）
  // getStaticPropsはparamsを受け取りますが、そこにはidが含まれています。
  // 5⃣. getStaticPathsから!!!!!!!!paramsを受け取る => idからファイル名をたどれる
export async function getStaticProps({ params }) {
    // ↓呼び出し元にawaitがついたので、呼び出し先でもawaitが必要（もともとasyncがついているので、awaitが使える）
  const postData = await getPostData(params.id)
  // const postData = await getPostData(params.id.join('/'))
  return {
    props: {
      postData
    }
  }
}