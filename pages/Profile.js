import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css' // stylesという名前でlayout.module.cssからインポート
import Link from 'next/link'
import Layout from '../components/layout'

const Profile = () => {
    const name = '日野　尚輝'
    return (
    <Layout>
        <h1 className={`${utilStyles.textAlignCenter} ${utilStyles.margin0Auto}`}>--- Profile ---</h1>
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
                <h2>自己紹介</h2>
                <p>現在は有機合成品の受託開発を行う会社で品質管理の仕事をしています。主な仕事内容は、プラントスケール（工場の規模）で製造した製品を、様々な装置（LC, GC, ICP-MS, KF水分計など）を用いて分析しています。（金属元素や水分の含量、粘度や導電率の測定など）</p>
                <p>今の仕事は、大学で学んだ化学および生物系の知識を活かせる仕事であり、収入的にも将来的にも安定した企業という理由で選びました。いざ就職してみると、思っていた通り、仕事内容および、給与面で特に不満はありませんでした。</p>
                <p>しかし、2020年のゴールデンウィーク、新型コロナウイルスの影響で自宅で過ごす中で、そこでふと「自分の人生、このままでいいのだろうか」と思いました。そして、自分の人生について、これまでにないくらい深く考えました。</p>
                <p>その理由は、自分の過去を振り返ることで見えてきました。中学生、高校生の時は受験や部活、大学生、大学院生の時は就職や研究活動といった「目標」をもって、それに向かって全力で突き進んできました。そして、しかし社会人になった今、それが急になくなってしまったことに不安を覚えたからだと思います。強いて言えば「お金」を目標にしているかもしれません。</p>
                <p>そして出た結論が「何かに挑戦し続ける人生にしたい」ということでした。自分が今まで、一番輝いていた時期、今の生き方に繋がる時期は例外なく「何かに挑戦している時期」だったからです。そして、自分が今挑戦したいこと、やりたいことは何か、ということを考えた結果、プログラミングが真っ先に思い浮かびました。</p>
                <p>というのも、自分は一度、Rubyという言語を勉強していた時期がありました（大学院一年生の時です）。理由は「WEBサイトやアプリ作ってみることに興味があったから」や「副業で稼げるから」のようなものだったと記憶しています。そして、プログラミングは予想以上に楽しく、IT企業への就職も視野に入れていました。しかし当時は業界のこともよく知らず、また、特に明確な目標があったわけではないので途中で学習をやめてしまい、いざ就職活動の時期になると「大学で化学系の勉強をしたからそれに関係する職業につかなければならない」という「サンクコストバイアス」に縛られ、今の仕事を選びました。改めて今の仕事に向き合ってみると、給与面では特に不満はありませんが、本当に自分がやりたいことかと言われると、そうではないと気づきました。</p>
                <p>そこでもう一度、プログラミングに挑戦してみようと思い、2020年5月、プログラミングを始めました。継続しているとだんだん、その魅力に惹かれて行きました。そしていつしか、今の仕事を辞めてでも、これを仕事にしたいと思うようになりました。転職することに迷いはありません。よろしくお願いします。</p>
                <h2>アピールポイント</h2>
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
                <h2>今の会社での取り組み</h2>
                    <p>今の会社では、まだ大きな何かを成し遂げた経験はありませんが、一年間でかなり成長できたと自負しています。</p>
                    <p>特に意識していることは4つあります。また、仕事に対しては人一倍真剣に向き合っている自信があります。特に意識していることは2つあります</p>
                    <ul>
                        <li className={utilStyles.fontWeightBold}>二度同じ失敗をしないこと</li>
                        <p>挑戦をすれば失敗をすると思います。一度失敗した段階で解決策を考え、同じ失敗をしないように心掛けています。基本的に意識するだけでは変わることができないのは体感しているので、メモを取ったり、自分専用の手順書を作ったり、構造的に解決することを心掛けていました。</p>
                        <li className={utilStyles.fontWeightBold}>業務の効率化を常に考えること</li>
                        <p>業務を効率化すると、無駄な残業を減らすことができ、帰宅後の自由時間を確保することができ、プログラミング学習の時間に充てることができました。また、心身の健康の維持にも非常に有効でした。</p>
                        <li className={utilStyles.fontWeightBold}>率先して自分の意見を言うこと</li>
                        <p>課内での会議や部署の会議などで、積極的に発言をすることを心掛けています。その繰り返しによって、問題に対しての意見や解決策を思考する癖をつけ、大勢の前でも臆することなく意見を言うことができるようになりました。</p>
                        <li className={utilStyles.fontWeightBold}>「話し方」「伝え方」を意識しながら仕事を行うこと</li>
                        <p>私は話し方があまり上手ではないという弱みがあります。それを克服するために、日々、色々な試みをしています。例えば、日々の業務での会話はもちろん、雑談に関しても、可能な限りゆっくり話すことを心掛けています。また、質問をするときや、自分の意見を言うときは、突発的に話始めるのではなく、必ず自分の頭の中で論理を整理してから話すように心がけています。そういう小さな心がけによって、入社時の自分とはまるで別人になっていると自部しています。</p>
                    </ul>
                <h2>趣味</h2>
                <ul>
                    <li>B'z</li>
                    <li>エレキギター（使用ギター: YAMAHA PACIFICA 510V）</li>
                    <li>楽曲制作</li>
                </ul>
                <h2>資格</h2>
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