import Layout from '../../components/layout'
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // をインポート
  import { getAllPostIds, getPostData } from '../../lib/posts'

  // getStaticPropsからpostDataを受け取って表示
  export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    )
  }

  // 3⃣. ビルド時にレンダリングする必要のあるパス（事前ビルドしたいパス）のリストを生成する
  // idとして取り得る値のリストを返す
  // paths: 事前ビルドするパス対象を指定するパラメータ
  // fallback: 事前ビルドしたパス以外にアクセスしたときのパラメータ true: カスタム404pageを表示 false
  export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths, // => params: {id: 'ssg-ssr'} と　{id: 'pre-rendering'}
      fallback: false
    }
  }
  // ビルド時に静的なファイルを生成し、ページコンポーネントで使用する値を用意する
  // paramsには上記pathsで指定した値が入る（1postずつ）
  // getStaticPropsはparamsを受け取りますが、そこにはidが含まれています。
  // 5⃣. getAllPostIds()からparamsを受け取る => idからファイル名をたどれる
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}