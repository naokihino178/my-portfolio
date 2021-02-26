import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css"; // stylesという名前でlayout.module.cssからインポート
import Link from "next/link";
import Layout from "../components/layout";

const Portfolio = () => {
  return (
    <Layout>
      <section className={styles.main}>
        <Link href="https://next-js-tutorial.naokihino178.vercel.app">
          <button className={styles.item2}>
            <div className={styles.portfolioDesc}>
              <h2 className={utilStyles.headingLg}>ブログ</h2>
              <p className={utilStyles.headingMd}>Next.js + TypeScript</p>
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
        <Link href="/KakeiboApp">
          <button className={styles.item2}>
            <div className={styles.portfolioDesc}>
              <h2 className={utilStyles.headingLg}>クイズアプリ</h2>
              <p className={utilStyles.headingMd}>React + Firebase</p>
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
        <Link href="/ChatApp">
          <button className={styles.item2}>
            <div className={styles.portfolioDesc}>
              <h2 className={utilStyles.headingLg}>節約レシピ管理アプリ</h2>
              <p className={utilStyles.headingMd}>Express + MySQL</p>
              <ul>
                <li>節約レシピを管理するアプリです。</li>
                <li>
                  調理工程を入力しやすくするため、一工程ずつインプットフォームを作成しました。
                </li>
                <li>作成したレシピは安い順に並ぶようにしてあります。</li>
                <li>テンプレートエンジンとしてEJSを用いました。</li>
                <li>
                  HCircleCIを用いて、GitHubにプッシュすると自動でHerokuへデプロイされるようになっています。
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
        <Link href="/blog">
          <button className={styles.item2}>
            <div className={styles.portfolioDesc}>
              <h2 className={utilStyles.headingLg}>Todo管理アプリ</h2>
              <p className={utilStyles.headingMd}>
                React + TypeScript + Firebase
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
