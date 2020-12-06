import { useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css' // stylesという名前でlayout.module.cssからインポート
import Layout from '../components/layout'

const Skill = () => {
    // 変数
    const imgHtml = (
    <div className={styles.img}>
        <img src="/images/html-5.svg" />
    </div>
    )
    
    const descHtml = (
    <ul className={styles.desc}>
        <li>基本的にBEM記法を使うようにしています。</li>
    </ul>
    )

    // 以下はなぜダメ？？（alertは確認用）
    // initialHtmlがhtmlに再代入されたはずなのに認識してない、なぜ？
        // const [html, setHtml] = useState(imgHtml)    
        //
        // const handleHtml = () => {
            //     if(html == imgHtml) {
                //         setHtml(descHtml)
                //         alert('文字に変えるよ')
                //     }else{
        //         setHtml(imgHtml)
        //         alert('画像に変えるよ')
        //     }
    // }
    
    const imgCss = (
    <div className={styles.img}>
        <img src="/images/css-3.svg" />
    </div>
    )
    
    const descCss = (
    <ul className={styles.desc}>
        <li>transitionやanimationを使った動きをつけることができます。</li>
        <li>疑似要素</li>
    </ul>
    )
    
    const imgSass = (
    <div className={styles.img}>
        <img src="/images/sass.svg" />
    </div>
    )
    
    const descSass = (
    <ul className={styles.desc}>
        <li>メディアクエリを使用して、レスポンシブデザインを実装することができます。</li>
    </ul>
    )

    const imgJavascript = (
    <div className={styles.img}>
        <img src="/images/javascript.svg" />
    </div>
    )
    
    const descJavascript = (
    <ul className={styles.desc}>
        <li>アロー関数やモジュールなど、ES6に則った開発ができます。</li>
        <li>非同期処理</li>
    </ul>
    )

    const imgTypescript = (
    <div className={styles.img}>
        <img src="/images/typescript.svg" />
    </div>
    )
    
    const descTypescript = (
    <ul className={styles.desc}>
        <li>型付けに則った、無駄のない開発ができます。</li>
        <li>JSで書かれたコードをTSに書き換えることができます。</li>
    </ul>
    )

    const imgReact = (
    <div className={styles.img}>
        <img src="/images/react.svg" />
    </div>
    )
    
    const descReact = (
    <ul className={styles.desc}>
        <li>React Hooksを問題なく使用できます。</li>
        <li>class構文をHooksを使って書き換えることもできます。</li>
        <li>React Router</li>
    </ul>
    )
    
    const imgNextjs = (
    <div className={styles.img}>
        <img src="/images/nextjs.svg" />
    </div>
    )
    
    const descNextjs = (
    <ul className={styles.desc}>
        <li>SSG、SSR、CSRを適切に使い分けることができます。</li>
        <li>Dynamic Routeを問題なく使うことができます。</li>
    </ul>
    )
    
    const imgNodejs = (
    <div className={styles.img}>
        <img src="/images/nodejs.svg" />
    </div>
    )
    
    const descNodejs = (
    <ul className={styles.desc}>
        <li>基本的なことはできます。</li>
    </ul>
    )
    
    const imgFirebase = (
    <div className={styles.img}>
        <img src="/images/firebase.svg" />
    </div>
    )
    
    const descFirebase = (
    <ul className={styles.desc}>
        <li>Authenticationを使った認証機能の実装ができます。</li>
        <li>Cloud Firestoreを使ったデータベースの操作ができます。</li>
    </ul>
    )
    
    // state
    const [html, setHtml] = useState(imgHtml)
    const [switchHtml, setSwitchHtml] = useState(true)
    const [css, setCss] = useState(imgCss)
    const [switchCss, setSwitchCss] = useState(true)
    const [sass, setSass] = useState(imgSass)
    const [switchSass, setSwitchSass] = useState(true)
    const [javascript, setJavascript] = useState(imgJavascript)
    const [switchJavascript, setSwitchJavascript] = useState(true)
    const [typescript, setTypescript] = useState(imgTypescript)
    const [switchTypescript, setSwitchTypescript] = useState(true)
    const [react, setReact] = useState(imgReact)
    const [switchReact, setSwitchReact] = useState(true)
    const [nextjs, setNextjs] = useState(imgNextjs)
    const [switchNextjs, setSwitchNextjs] = useState(true)
    const [nodejs, setNodejs] = useState(imgNodejs)
    const [switchNodejs, setSwitchNodejs] = useState(true)
    const [firebase, setFirebase] = useState(imgFirebase)
    const [switchFirebase, setSwitchFirebase] = useState(true)

    const handleHtml = () => {
        if(switchHtml) {
            setHtml(descHtml)
            setSwitchHtml(false)
        }else{
            setHtml(imgHtml)
            setSwitchHtml(true)
        }
    }

    const handleCss = () => {
        if(switchCss) {
            setCss(descCss)
            setSwitchCss(false)
        }else{
            setCss(imgCss)
            setSwitchCss(true)
        }
    }
    const handleSass = () => {
        if(switchSass) {
            setSass(descSass)
            setSwitchSass(false)
        }else{
            setSass(imgSass)
            setSwitchSass(true)
        }
    }
    const handleJavascript = () => {
        if(switchJavascript) {
            setJavascript(descJavascript)
            setSwitchJavascript(false)
        }else{
            setJavascript(imgJavascript)
            setSwitchJavascript(true)
        }
    }
    const handleTypescript = () => {
        if(switchTypescript) {
            setTypescript(descTypescript)
            setSwitchTypescript(false)
        }else{
            setTypescript(imgTypescript)
            setSwitchTypescript(true)
        }
    }
    const handleReact = () => {
        if(switchReact) {
            setReact(descReact)
            setSwitchReact(false)
        }else{
            setReact(imgReact)
            setSwitchReact(true)
        }
    }
    const handleNextjs = () => {
        if(switchNextjs) {
            setNextjs(descNextjs)
            setSwitchNextjs(false)
        }else{
            setNextjs(imgNextjs)
            setSwitchNextjs(true)
        }
    }
    const handleNodejs = () => {
        if(switchNodejs) {
            setNodejs(descNodejs)
            setSwitchNodejs(false)
        }else{
            setNodejs(imgNodejs)
            setSwitchNodejs(true)
        }
    }
    const handleFirebase = () => {
        if(switchFirebase) {
            setFirebase(descFirebase)
            setSwitchFirebase(false)
        }else{
            setFirebase(imgFirebase)
            setSwitchFirebase(true)
        }
    }

    return (
    <Layout>
        <h1 className={`${utilStyles.textAlignCenter} ${utilStyles.margin0Auto}`}>--- Skill ---</h1>
            {/* クリックで何ができるかを表示(hoverで表示でもいいかも、でも一覧で見たいからやっぱこれかな) */}
            {/* 情報量を増やす & 画像を大きくするため、3*3のタイルでもいいかも（適当に技術一個追加でｗ） */}
        <section className={styles.main}>
            <div className={styles.item} onClick={handleHtml}>
                <h2 className={utilStyles.headingLg}>HTML</h2>
                {html}
            </div>
            <div className={styles.item} onClick={handleCss}>
                <h2 className={utilStyles.headingLg}>CSS</h2>
                {css}
            </div>
            <div className={styles.item} onClick={handleSass}>
                <h2 className={utilStyles.headingLg}>Sass</h2>
                {sass}
            </div>
            <div className={styles.item} onClick={handleJavascript}>
                <h2 className={utilStyles.headingLg}>JavaScript</h2>
                {javascript}
            </div>
            <div className={styles.item} onClick={handleTypescript}>
                <h2 className={utilStyles.headingLg}>TypeScript</h2>
                {typescript}
            </div>
            <div className={styles.item} onClick={handleReact}>
                <h2 className={utilStyles.headingLg}>React</h2>
                {react}
            </div>
            <div className={styles.item} onClick={handleNextjs}>
                <h2 className={utilStyles.headingLg}>Next.js</h2>
                {nextjs}
            </div>
            <div className={styles.item} onClick={handleNodejs}>
                <h2 className={utilStyles.headingLg}>node.js</h2>
                {nodejs}
            </div>
            <div className={styles.item} onClick={handleFirebase}>
                <h2 className={utilStyles.headingLg}>Firebase</h2>
                {firebase}
            </div>
        </section>
    </Layout>
    )
}

export default Skill