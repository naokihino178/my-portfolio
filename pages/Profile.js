import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css"; // stylesという名前でlayout.module.cssからインポート
import Link from "next/link";
import Layout from "../components/layout";

const Profile = () => {
  return (
    <Layout>
      <h3 className={styles.title}>プロフィール</h3>
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
            日野　尚輝
          </p>
          <a
            href="https://twitter.com/warabukki"
            className={utilStyles.twitterButton}
          >
            <i class="fab fa-twitter-square"></i>
          </a>
          <a className={utilStyles.lineButton}>
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
          <h2 className={utilStyles.outline}>現職について</h2>
          <p>有機合成品の受託開発を行う会社で品質管理の仕事をしています。</p>
          <p>
            自社で製造した製品を、様々な装置（LC, GC, ICP-MS,
            KF水分計など）を用いて分析しています。
          </p>
          <h2 className={utilStyles.outline}>アピールポイント</h2>
          <ul>
            <li className={utilStyles.fontWeightBold}>
              高い自己肯定感、自己効力感
            </li>
            <p>
              今までの人生で「小さな成功体験」を積み重ねることで、自分に自信を持つことができるようになりました。
            </p>
            <li className={utilStyles.fontWeightBold}>
              プログラミング学習に対するモチベーション
            </li>
            <p>
              自分は紛れもなく「楽しいから」プログラミングに取り組んでいます。その理由は「常に勉強をし続けること」「自分が書いたコードが形になること」です。この2つは今後揺らぐことはないと確信しています。
            </p>
            <li className={utilStyles.fontWeightBold}>
              何でも「とりあえずやってみよう」というチャレンジ精神
            </li>
            <p>
              興味のある事はとりあえずやってみるということを心がけていました。（プログラミング、バンド活動、投資、釣り、麻雀、ルービックキューブなど）
              <br />
              最終的に残っているのがギターおよびプログラミングです。
            </p>
            <li className={utilStyles.fontWeightBold}>
              問題に対しての解決策を考え、実行する能力
            </li>
            <p>この力が身に付いたのは大学院での研究活動だと確信しています。</p>
          </ul>
          <h2 className={utilStyles.outline}>趣味</h2>
          <ul>
            <li className={utilStyles.fontWeightBold}>エレキギター</li>
            <li className={utilStyles.fontWeightBold}>音楽鑑賞</li>
            <li className={utilStyles.fontWeightBold}>楽曲制作</li>
          </ul>
          <h2 className={utilStyles.outline}>資格</h2>
          <ul>
            <li className={utilStyles.fontWeightBold}>普通自動車運転免許</li>
            <li className={utilStyles.fontWeightBold}>普通自動二輪運転免許</li>
            <li className={utilStyles.fontWeightBold}>
              TOEIC Listening & Reading TEST 740点
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
