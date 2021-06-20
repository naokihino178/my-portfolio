import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import { useState } from "react";

const Profile = () => {
  const [openSkillSection, setOpenSkillSection] = useState(true);
  const [openPortfolioSection, setOpenPortfolioSection] = useState(true);
  return (
    <Layout>
      <section className={styles.profileContainer}>
        <div className={styles.profileSubContainer}>
          <div className={styles.githubIconContainer}>
            <a
              href="https://github.com/naokihino178"
              className={utilStyles.githubButton}
            >
              <i class="fab fa-github-square"></i>
            </a>
            <p> ← GitHubのアカウントはこちらです。</p>
          </div>
        </div>
        <div className={styles.profileMainContainer}>
          <h2
            className={utilStyles.outline}
            onClick={() => {
              setOpenSkillSection(!openSkillSection);
            }}
          >
            {openSkillSection ? "▲" : "▼"} スキル
          </h2>
          {openSkillSection ? (
            <>
              <h3>【マークアップ言語】</h3>
              <p className={styles.skillName}>HTML, CSS, Sass</p>
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
              <h3>【プログラミング言語】</h3>
              <p className={styles.skillName}>JavaScript, TypeScript</p>
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
              <h3>【ライブラリ、フレームワーク】</h3>
              <p className={styles.skillName}>
                React, Redux, Material-UI, Express
              </p>
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
                    <img src="/images/material-ui.svg" />
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillImg}>
                    <img src="/images/express.svg" />
                  </div>
                </div>
              </section>
              <h3>【データベース】</h3>
              <p className={styles.skillName}>
                MySQL, Firebase(Cloud Firestore)
              </p>
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
              <h3>【その他】</h3>
              <p className={styles.skillName}>
                Firebase(Authentication, Storage), Heroku, CircleCI, Git, GitHub
              </p>
              <section className={styles.main}>
                <div className={styles.skillItem}>
                  <div className={styles.skillImg}>
                    <img src="/images/firebase.svg" />
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillImg}>
                    <img src="/images/heroku-icon.svg" />
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.skillImg}>
                    <img src="/images/circleci.svg" />
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
              </section>
            </>
          ) : (
            ""
          )}
          <h2
            className={utilStyles.outline}
            onClick={() => {
              setOpenPortfolioSection(!openPortfolioSection);
            }}
          >
            {openPortfolioSection ? "▲" : "▼"} 製作物
          </h2>
          {openPortfolioSection ? (
            <>
              <section className={styles.main}>
                <Link href="https://ranking-app-naokihino178.vercel.app/">
                  <button className={styles.portfolioItem}>
                    <div className={styles.portfolioDesc}>
                      <h2 className={utilStyles.headingMd}>
                        ランキング投稿アプリ
                      </h2>
                      <p className={utilStyles.headingSd}>
                        (React, TypeScript, Redux, Firebase(Authentication,
                        Cloud Firestore, Storage))
                      </p>
                    </div>
                    <img
                      src="/images/rankingApp.jpeg"
                      className={utilStyles.portfolioImg}
                      alt="作曲補助アプリ"
                    />
                  </button>
                </Link>
                <Link href="https://quizapp-6ew7b2j3t-naokihino178.vercel.app/">
                  <button className={styles.portfolioItem}>
                    <div className={styles.portfolioDesc}>
                      <h2 className={utilStyles.headingMd}>クイズアプリ</h2>
                      <p className={utilStyles.headingSd}>
                        (React, TypeScript, Material-UI, Firebase)
                      </p>
                    </div>
                    <img
                      src="/images/quizApp.jpeg"
                      className={utilStyles.portfolioImg}
                      alt="クイズアプリ"
                    />
                  </button>
                </Link>
                <Link href="https://composition-app-naokihino178.vercel.app/">
                  <button className={styles.portfolioItem}>
                    <div className={styles.portfolioDesc}>
                      <h2 className={utilStyles.headingMd}>作曲アプリ</h2>
                      <p className={utilStyles.headingSd}>
                        (React, TypeScript, Firebase)
                      </p>
                    </div>
                    <img
                      src="/images/compositionApp.jpeg"
                      className={utilStyles.portfolioImg}
                      alt="作曲補助アプリ"
                    />
                  </button>
                </Link>
                <Link href="https://orenosetsuyakumeshi.herokuapp.com/">
                  <button className={styles.portfolioItem}>
                    <div className={styles.portfolioDesc}>
                      <h2 className={utilStyles.headingMd}>レシピ管理アプリ</h2>
                      <p className={utilStyles.headingSd}>
                        (JavaScript(EJS), Express, MySQL, CircleCI, Heroku)
                      </p>
                    </div>
                    <img
                      src="/images/recipeApp.jpeg"
                      className={utilStyles.portfolioImg}
                      alt="レシピ管理アプリ"
                    />
                  </button>
                </Link>
              </section>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
