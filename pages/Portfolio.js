import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css' // stylesという名前でlayout.module.cssからインポート
import Link from 'next/link'
import Layout from '../components/layout'

const Portfolio = () => {
    return (
    <Layout>
        <section className={styles.main}>
            <Link href="https://next-js-tutorial.naokihino178.vercel.app">
                <button className={styles.item2}>
                    <h2 className={utilStyles.headingLg}>ブログ</h2>
                    <p className={utilStyles.headingMd}>React (Next.js)<br />+<br />TypeScript</p>
                </button>
            </Link>
            <Link href="/KakeiboApp">
                <button className={styles.item2}>
                    <h2 className={utilStyles.headingLg}>家計簿</h2>
                    <p className={utilStyles.headingMd}>React (Create React App)</p><br /><br /><br /><br />
                </button>
            </Link>
            <Link href="/ChatApp">
                <button className={styles.item2}>
                    <h2 className={utilStyles.headingLg}>チャットアプリ</h2>
                    <p className={utilStyles.headingMd}>React (Create React App)<br />+<br />Firebase</p>
                </button>
            </Link>
            <Link href="/blog">
                <button className={styles.item2}>
                    <h2 className={utilStyles.headingLg}>Todo管理アプリ</h2>
                    <p className={utilStyles.headingMd}>React (Create React App)<br />+<br />TypeScript<br />+<br />Firebase<br /></p>
                </button>
            </Link>
        </section>
    </Layout>
    )
}

export default Portfolio