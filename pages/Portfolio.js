import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css"; // stylesという名前でlayout.module.cssからインポート
import Link from "next/link";
import Layout from "../components/layout";

// タイルクリックで使用しているポートフォリオと切り替えてもいいかも
// それぞれのポートフォリオをクリックで飛べるように

const Portfolio = () => {
  return (
    <Layout>
      <h3 className={styles.title}>オリジナルアプリ</h3>
      <section className={styles.main}>
        <Link href="https://next-js-tutorial.naokihino178.vercel.app">
          <button className={styles.portfolioItem}>
            <div className={styles.portfolioDesc}>
              <h2 className={utilStyles.headingLg}>ブログ</h2>
              <p className={utilStyles.headingMd}>(Next.js, TypeScript)</p>
              <ul>
                <li>自らの学習の進捗をまとめたブログです。</li>
                <li>
                  以前LINEノートで行っていた週間目標を記入し、その達成状況を一週間ごとに振り返っています。
                </li>
                <li>自らの学習進捗を確認できるため、大いに役立ちました。</li>
              </ul>
            </div>
            <img
              src="/images/blogApp.jpeg"
              className={utilStyles.portfolioImg}
              // alt={name}
            />
          </button>
        </Link>
        <Link href="https://quizapp-taupe.vercel.app/">
          <button className={styles.portfolioItem}>
            <div className={styles.portfolioDesc}>
              <h2 className={utilStyles.headingLg}>クイズアプリ</h2>
              <p className={utilStyles.headingMd}>
                (React, Material-UI, Firebase)
              </p>
              <ul>
                <li>Material UIを用いてモダンなUIを実現しています。</li>
                <li>
                  某テレビ番組を参考に、回答を絞る機能などを実装してみました。
                </li>
              </ul>
            </div>
            <img
              src="/images/quizApp.jpeg"
              className={utilStyles.portfolioImg}
              // alt={name}
            />
          </button>
        </Link>
        <Link href="https://orenosetsuyakumeshi.herokuapp.com/">
          <button className={styles.portfolioItem}>
            <div className={styles.portfolioDesc}>
              <h2 className={utilStyles.headingLg}>節約レシピ管理アプリ</h2>
              <p className={utilStyles.headingMd}>
                (EJS, Express, MySQL, CircleCI, Heroku)
              </p>
              <ul>
                <li>節約レシピを管理するアプリです。</li>
                <li>
                  私が7年間の一人暮らしで開発した節約レシピをぜひご覧ください。
                </li>
                <li>
                  調理工程を入力しやすくするため、一工程ずつインプットフォームを作成しました。
                </li>
              </ul>
            </div>
            <img
              src="/images/recipeApp.jpeg"
              className={utilStyles.portfolioImg}
              // alt={name}
            />
          </button>
        </Link>
      </section>
      <h3 className={styles.title}>コピーアプリ</h3>
      <section className={styles.main}>
        <Link href="/blog">
          <button className={styles.portfolioItem}>
            <div className={styles.portfolioDesc}>
              <h2 className={utilStyles.headingLg}>Todo管理アプリ</h2>
              <p className={utilStyles.headingMd}>
                (React, TypeScript, Material-UI, Firebase)
              </p>
              <ul>
                <li>シンプルなTodoアプリです。</li>
                <li>
                  実際に使いながら、自分の生活に最適なTodoアプリに仕上げました。
                </li>
              </ul>
            </div>
            <img
              src="/images/todoApp.jpeg"
              className={utilStyles.portfolioImg}
              // alt={name}
            />
          </button>
        </Link>
      </section>
    </Layout>
  );
};

export default Portfolio;
