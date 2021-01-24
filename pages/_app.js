/* global.cssは_app.jsにしかインポートできない！！ */

/////////// ※特に宣言とかをしなくても、全てのコンポーネントでAppコンポーネントが読み込まれる
// ・app.jsは特殊なファイルでRouteコンポーネントをラップする
// ・全ページで共通して実行させたいファイルを読み込む
// ・全ページで共通して実行させたい処理を実行する
// （ログインなど認証の監視とか）
// ・全ページ共通のレイアウトを組み込む


import '../styles/global.css' //global.cssをインポート（全てのファイルにglobal.cssのスタイルが適用される）

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }