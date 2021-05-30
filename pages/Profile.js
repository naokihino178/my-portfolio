import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css"; // stylesという名前でlayout.module.cssからインポート
import Link from "next/link";
import Layout from "../components/layout";

const Profile = () => {
  return (
    <Layout>
      <section className={styles.profileContainer}>
        <div className={styles.profileSubContainer}>
          <img
            src="/images/profile.jpg"
            className={styles.profileImg}
            alt="profileImg"
          />
          <p
            className={`${utilStyles.headingSd} ${utilStyles.textAlignCenter}`}
          >
            hino
          </p>
          <a
            href="https://twitter.com/n__hino"
            className={utilStyles.twitterButton}
          >
            <i class="fab fa-twitter-square"></i>
          </a>
          <a
            href="https://line.me/ti/p/lI2wMbweX1"
            className={utilStyles.lineButton}
          >
            <i class="fab fa-line"></i>
          </a>
          <a
            href="https://github.com/naokihino178"
            className={utilStyles.githubButton}
          >
            <i class="fab fa-github-square"></i>
          </a>
        </div>
        <div className={styles.profileMainContainer}>
          <h2 className={utilStyles.outline}>スキル</h2>
          <p>マークアップ言語: HTML, CSS, Sass</p>
          <section className={styles.main}>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/html-5.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/css-3.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/sass.svg" />
              </div>
            </div>
          </section>
          <p>プログラミング言語: JavaScript, TypeScript</p>
          <section className={styles.main}>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/javascript.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/typescript.svg" />
              </div>
            </div>
          </section>
          <p>ライブラリ、フレームワーク: React, Redux, Next.js, Express</p>
          <section className={styles.main}>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/react.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/redux.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/nextjs.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/express.svg" />
              </div>
            </div>
          </section>
          <p>データベース: MySQL, Firebase(Cloud Firestore)</p>
          <section className={styles.main}>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/mysql.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/firebase.svg" />
              </div>
            </div>
          </section>
          <p>その他: Firebase(Authentication, Storage), Git, GitHub, Postman</p>
          <section className={styles.main}>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/firebase.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/git.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/github.svg" />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillImg}>
                <img src="/images/postman.svg" />
              </div>
            </div>
          </section>
          <h2 className={utilStyles.outline}>製作物</h2>
          <section className={styles.main}>
            <Link href="https://quizapp-taupe.vercel.app/">
              <button className={styles.portfolioItem}>
                <div className={styles.portfolioDesc}>
                  <h2 className={utilStyles.headingLg}>クイズアプリ</h2>
                  <p className={utilStyles.headingMd}>
                    (React, TypeScript, Material-UI, Firebase)
                  </p>
                  <ul>
                    <li>
                      日々の学習のため、シンプルで使い勝手の良いクイズアプリを作りました。
                    </li>
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
            <Link href="https://composition-app.vercel.app">
              <button className={styles.portfolioItem}>
                <div className={styles.portfolioDesc}>
                  <h2 className={utilStyles.headingLg}>作曲アプリ</h2>
                  <p className={utilStyles.headingMd}>(React, TypeScript)</p>
                  <ul>
                    <li>
                      趣味の作曲を効率化できないかと考え、作成したアプリです。
                    </li>
                    <li>
                      曲のキーを入力すると、ダイアトニックコードおよびよく使われるコード進行の一覧が表示されます。
                    </li>
                    <li>
                      趣味の作曲のスピードが上がりました。また、自分の趣味とプログラミングが繋がった実感があり、とても嬉しかったです。
                    </li>
                  </ul>
                </div>
                <img
                  src="/images/compositionApp.jpeg"
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
          <h2 className={utilStyles.outline}>お問い合わせ</h2>
          Email（<a>naoki.hino178@gmail.com</a>） または
          TwitterのDMでよろしくお願いします。
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
