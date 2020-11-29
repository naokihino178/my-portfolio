import { useState } from 'react'
import utilStyles from '../styles/utils.module.css'

const Form = () => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [nameErrorText, setNameErrorText] = useState('')
    const [telErrorText, setTelErrorText] = useState('')
    const [emailErrorText, setEmailErrorText] = useState('')
    const [contentErrorText, setContentErrorText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(name !== '' && tel !== '' && email !== '' && content !== ''){
            confirm(`以下の内容で送信します。よろしいですか？\nお名前: ${name}\n電話番号: ${tel}\nメールアドレス: ${email}\nお問い合わせ内容: ${content}`)
            setName('')
            setTel('')
            setEmail('')
            setContent('')
        }
        if (name === '') {
            setNameErrorText('　お名前を入力してください')
        }else{
            setNameErrorText('')
        }
        if (tel === '') {
            setTelErrorText('　電話番号を入力してください')
        }else{
            setTelErrorText('')
        }
        if(email === ''){
            setEmailErrorText('　メールアドレスを入力してください')
        }else{
            setEmailErrorText('')
        }
        if(content === ''){
            setContentErrorText('　お問い合わせ内容を入力してください')
        }else{
            setContentErrorText('')
        }
    }

    return(
        <div className={utilStyles.headingSd}>
            <form onSubmit={handleSubmit}>
                <p className={utilStyles.fontWeightBold}>お名前</p>
                <input
                size='20'
                value = {name}
                onChange={e => {
                    setName(e.target.value)
                }}
                />
                <span className={utilStyles.error}>{nameErrorText}</span>
                <p className={utilStyles.fontWeightBold}>電話番号</p>
                <input
                size='20'
                value = {tel}
                onChange={e => {
                    setTel(e.target.value)
                }}
                />
                <span className={utilStyles.error}>{telErrorText}</span>
                <p className={utilStyles.fontWeightBold}>メールアドレス</p>
                <input
                size='30'
                value = {email}
                onChange={e => {
                    setEmail(e.target.value)
                }}
                />
                <span className={utilStyles.error}>{emailErrorText}</span>
                <p className={utilStyles.fontWeightBold}>お問い合わせ内容</p>
                <textarea
                cols='40'
                rows='10'
                value = {content}
                onChange={e => {
                    setContent(e.target.value)
                }}
                />
                <span className={utilStyles.error}>{contentErrorText}</span>
                <br />
                <button className={utilStyles.btn} type="submit" value="送信">
                    送信
                </button>  
            </form>
        </div>
    );
}

export default Form