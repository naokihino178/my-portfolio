import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css' // stylesという名前でlayout.module.cssからインポート
import Link from 'next/link'
import Layout from '../components/layout'

const Profile = () => {
    const name = '日野　尚輝'
    return (
    <Layout>
        <section className={styles.top}>
            <div className={styles.subContainer}>
                <img
                src="/images/profile.jpg"
                className={utilStyles.profileImg}
                alt={name}
                />
                <p className={`${utilStyles.fontWeightBold} ${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>{name}</p>
                <div>1995年<br/>島根県で誕生</div>
                <div>2018年<br/>鳥取大学卒業（農学）</div>
                <div>2020年<br/>鳥取大学大学院修了（農学）</div>
                <div>2020年<br/>神戸天然物化学株式会社　入社</div>
                <a href="https://twitter.com/warabukki"><button className={utilStyles.twitterButton}>t</button></a>
                <button className={utilStyles.instagramButton}>I</button>
                <button className={utilStyles.lineButton}>L</button>
                <a href="https://github.com/naokihino178"><button className={utilStyles.githubButton}>G</button></a>
            </div>
            <div className={styles.mainContainer}>
                <h2 className={utilStyles.outline}>自己紹介</h2>
                <p>現在は有機合成品の受託開発を行う会社で品質管理の仕事をしています。主な仕事内容は、プラントスケール（工場の規模）で製造した製品を、様々な装置（LC, GC, ICP-MS, KF水分計など）を用いて分析しています。（金属元素や水分の含量、粘度や導電率の測定など）</p>
                <h2 className={utilStyles.outline}>アピールポイント</h2>
                <ul>
                    <li className={utilStyles.fontWeightBold}>高い自己肯定感、自己効力感</li>
                    <p>今までの人生で「小さな成功体験」を積み重ねることで、自分に自信を持つことができるようになりました。</p>
                    <li className={utilStyles.fontWeightBold}>プログラミング学習に対するモチベーション</li>
                    <p>今自分は紛れもなく「楽しいから」プログラミングに取り組んでいます。その理由は2つあり「常に勉強をし続けること」「自分が書いたコードが形になること」です。この2つは今後揺らぐことはないと確信しています。</p>
                    <li className={utilStyles.fontWeightBold}>何でも「とりあえずやってみよう」というチャレンジ精神</li>
                    <p>今まで、興味のある事はやってみることを心掛けて生きてきました。例として、プログラミング、バンド活動（ギター、ベース、ドラム、ボーカル）、投資、釣り、麻雀、ルービックキューブなど、多岐にわたる挑戦をしてきました。</p>
                    <li className={utilStyles.fontWeightBold}>問題に対しての解決策を考え、実行する能力</li>
                    <p>この力が身に付いたのは大学院での研究活動だと確信しています。</p>
                </ul>
                <h2 className={utilStyles.outline}>趣味</h2>
                <ul>
                    <li>B'z</li>
                    <li>エレキギター</li>
                    <li>楽曲制作</li>
                </ul>
                <h2 className={utilStyles.outline}>資格</h2>
                <ul>
                    <li>普通自動車運転免許</li>
                    <li>普通自動二輪運転免許</li>
                    <li>TOEIC Listening & Reading TEST 740点</li>
                </ul>
            </div>
        </section>
    </Layout>
    )
}

export default Profile