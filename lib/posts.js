// ファイルシステムからデータをとってくるライブラリを自作

// fs, path...node.jsに標準で入っているモジュールだが、エディタ上で使用できる？

// fsモジュール（ファイルを扱うためのモジュール）
import fs from 'fs'
// pathモジュール
import path from 'path'
// gray-matter...メタデータをparseする
import matter from 'gray-matter'

import remark from 'remark'
import html from 'remark-html'

// このprocess.cwd()メソッドは、Node.jsプロセスの現在の作業ディレクトリを返します
// 返り値として第1引数以降のパスを順番に結合したパスが得られます。
const postsDirectory = path.join(process.cwd(), 'posts')
// => "nextjs-blog/posts"

/////////////// ここからgetSortedPostsData() ///////////////
// 2. idと日付順に並べ替えられたdataが返ってくる => これをindex.jsで表示するためにインポート
export function getSortedPostsData() {

  // Get file names under /posts
  // (/posts下からファイルの名前（pre-rendering.mdとssg-ssr.md）を取得)
  // path.join(process.cwd(), 'posts') => (nextjs-blog/posts)フォルダの直下にあるファイルのリストを"同期的に"取得
  const fileNames = fs.readdirSync(postsDirectory) // /postsのデータを読み込んで変数fileNamesに代入 (pre-rendering.mdとssg-ssr.md)
  // => "pre-rendering.md と ssg-ssr.md"が配列として？代入
  // => [pre-rendering.md, ssg-ssr.md] ←こんな感じかな？

  // idとdataが返ってくる
  const allPostsData = fileNames.map(fileName => { // fileNames (pre-rendering.mdとssg-ssr.mdをmapで回す)
    
    // Remove ".md" from file name to get id
    // (id生成のため、ファイルネームから.mdを取り除く)
    const id = fileName.replace(/\.md$/, '') // replace()で.mdを''に置換、拡張子を削る（正規表現、要確認）
    // => "pre-rendering と ssg-ssr"

    // Read markdown file as string
    // (マークダウンファイルを文字列として読む)
    // nextjs-blog/postsと.mdが除かれたfileName（pre-renderingとssg-ssr）を連結
    const fullPath = path.join(postsDirectory, fileName)
    // => nextjs-blog/posts/pre-rendering と nextjs-blog/posts/ssg-ssr
    
    // ファイルの中身を読むにはfs.readFileSyncを用いる。
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // => nextjs-blog/posts/pre-rendering と nextjs-blog/posts/ssg-ssrの中身を読む
  
    // Use gray-matter to parse the post metadata section
    // (メタデータセクションをパースするためにgray-matterを使う)
    // 投稿記事のmdファイルのfromtmatterと本文を解析してJSONデータに変換するツール
    const matterResult = matter(fileContents)
    // => data: {
    //      title: 'Two Forms of Pre-rendering'
    //      date: '2020-01-01'
    //    }
    // => data: {
    //      title: 'When to Use Static Generation v.s. Server-side Rendering'
    //      date: '2020-01-02'
    //    }

    // Combine the data with the id
    // (dataとidを結合)
    // id => pre-rendering と ssg-ssr
    // ...matterResult.data
    //   => title: 'When to Use Static Generation v.s. Server-side Rendering'
    //      date: '2020-01-02'
    return {
      id,
      ...matterResult.data
    }
  })
  // mapここまで

  // Sort posts by date
  // posts (投稿)を日付順に並び替え（要復習、ブックマーク済み）
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/////////////// ここからgetAllPostIds() ///////////////
  // 2⃣. [{params: {id: 'ファイル名'}}, {{id: 'ファイル名'}}]を返す
  //    (postsディレクトリに存在するファイル名（.mdを除く）のリストを返します。)
  // 各オブジェクトにはparamsキーが存在して、idキーを持ったオブジェクトを含んでいなくてはなりません。（ファイル名で[id]を使用するため）
  // => [id].jsのgetStaticPaths()で呼び出し、pathに代入
  // および このファイルの、getPostData(id)にidを渡す
  // および？ [id].jsのgetStaticProps()にparamsを渡す？
  // (ファイル名とidを紐づけ？？→(たぶん、最終、idからファイル名をたどれるようにするためかな？？))
export function getAllPostIds() {
  // nextjs-blog/postsフォルダの直下にあるファイルのリストを"同期的に"取得
  const fileNames = fs.readdirSync(postsDirectory)
  // => "pre-rendering.md と ssg-ssr.md"が配列として？代入
  // => [pre-rendering.md, ssg-ssr.md] ←こんな感じかな？


  // Returns an array that looks like this:
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
  //  ↓
  // 配列になっているfileNamesをmapで回す、returnする値が特徴的
  // オブジェクトであり、キーがparams、その値がオブジェクト型で、
  // idというキーを持っている、その値がファイル名
  // => getStaticPathsのルール (paramsがないと失敗する)
  return fileNames.map(fileName => {
    return {
      params: {
        // id: fileName.replace(/\.md$/, '')
        id: ["rezero", "rem"] // 階層を持ったパスの場合は、idキーの値として配列を返す
      }
    }
  })
}

/////////////// ここからgetPostData() ///////////////
  // 4⃣. 与えられたidを持つ投稿をレンダーするのに必要なデータをフェッチする必要がある。
  //  idに基づいてブログの投稿データを返す。
  //   return {
  //  id, →ファイル名
  //  ...matterResult.data →title, data
  //  }
  // => [id].jsのgetStaticPropsに渡す
  // remark()にはawaitが必要だから、asyncをつけた
export async function getPostData(id) { // nextjs-blog/posts + `${id}.md`
  // 渡されたidに基づいて、pathを取得している
  const fullPath = path.join(postsDirectory, `${id}.md`)
  // マークダウンファイルの中身を変数fileContentsに代入
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  // メタデータセクション (title, data)を読み取り、matterResultに代入
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  // マークダウン形式のファイルをHTMLに
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
    // (dataとidを結合)
    // id => pre-rendering と ssg-ssr
    // ...matterResult.data
    //   => title: 'When to Use Static Generation v.s. Server-side Rendering'
    //      date: '2020-01-02'
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
// getSortedPostsData()との違いは
// => 1つのidごとに取ってきている？かな？
// => これがどのようにgetStaticPropsへ行くのだろう、そこを理解しろ