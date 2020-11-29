import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css' // stylesという名前でlayout.module.cssからインポート

const Profile = () => {
    const name = 'Naoki Hino'
    return (
    <>
        <div className={utilStyles.textAlignCenter}>
            <img
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
            />
            <p className={utilStyles.fontWeightBold}>{name}</p>
        </div>
        <div className={utilStyles.headingMd}>
            <p>フロントエンドエンジニアを目指しています。</p>
            <p>よろしくお願いします。</p>
        </div>
    </>
    )
}

export default Profile