// ファイルシステムからデータをとってくるライブラリを自作

// fs, path...node.jsに標準で入っているモジュールだが、エディタ上で使用できる？

// fsモジュール（ファイルを扱うためのモジュール）
import fs from 'fs'
// pathモジュール
import path from 'path'
// gray-matter...メタデータをparseする
import matter from 'gray-matter'

// このprocess.cwd()メソッドは、Node.jsプロセスの現在の作業ディレクトリを返します
// 返り値として第1引数以降のパスを順番に結合したパスが得られます。
const postsDirectory = path.join(process.cwd(), 'posts')
// => "nextjs-blog/posts"

export function getSortedPostsData() {
  // Get file names under /posts
  // (/posts下からファイルの名前（pre-rendering.mdとssg-ssr.md）を取得)
  // nextjs-blog/postsフォルダの直下にあるファイルのリストを"同期的に"取得
  const fileNames = fs.readdirSync(postsDirectory) // /postsのデータを読み込んで変数fileNamesに代入 (pre-rendering.mdとssg-ssr.md)
  // => "pre-rendering.md と ssg-ssr.md"

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
  // posts (投稿)を日付順に並び替え
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}