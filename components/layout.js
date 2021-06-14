import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = "ポートフォリオ";

export default function Layout({ children }) {
  // childrenはラップ要素、homeはトップページを表示？？
  return (
    <div className={styles.bg}>
      <Head>
        <link rel="icon" href="/computer_programming_man.ico" />
        <link
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
          rel="stylesheet"
        ></link>
        <meta
          name="description" // 検索した際にタイトルの下に説明文として表示
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image" // SNS上でシェアされた際に表示する画像、WebページのURL同様に絶対パスで指定
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta
          name="og:title" // ページのタイトル
          content={siteTitle}
        />
        <meta
          name="twitter:card" // Twitter上での表示タイプを指定するタグ
          content="summary_large_image"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <div className={styles.allContainer}>
        <div>
          {/* ここでやっとindex.jsのLayoutで囲まれた部分が表示 */}
          <main>{children}</main>
          {/*Layoutコンポーネントがラッピングしている中身を表示*/}
        </div>
      </div>
    </div>
  );
}
