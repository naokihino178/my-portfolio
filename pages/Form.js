import { useState } from "react";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [nameErrorText, setNameErrorText] = useState("");
  const [telErrorText, setTelErrorText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [contentErrorText, setContentErrorText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && tel !== "" && email !== "" && content !== "") {
      confirm(
        `以下の内容で送信してもよろしいですか？\nお名前: ${name}\n電話番号: ${tel}\nメールアドレス: ${email}\nお問い合わせ内容: ${content}`
      );
      setName("");
      setTel("");
      setEmail("");
      setContent("");
    }
    if (name === "") {
      setNameErrorText("　お名前を入力してください");
    } else {
      setNameErrorText("");
    }
    if (tel === "") {
      setTelErrorText("　電話番号を入力してください");
    } else {
      setTelErrorText("");
    }
    if (email === "") {
      setEmailErrorText("　メールアドレスを入力してください");
    } else {
      setEmailErrorText("");
    }
    if (content === "") {
      setContentErrorText("　お問い合わせ内容を入力してください");
    } else {
      setContentErrorText("");
    }
  };

  return (
    <Layout>
      <h3 className={styles.title}>お問い合わせ</h3>
      <section className={styles.main}>
        <div className={utilStyles.headingSd}>
          <form onSubmit={handleSubmit}>
            <p className={utilStyles.fontWeightBold}>お名前</p>
            <input
              size="20"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={styles.nameInput}
            />
            <span className={utilStyles.error}>{nameErrorText}</span>
            <p className={utilStyles.fontWeightBold}>電話番号</p>
            <input
              size="20"
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
              className={styles.telInput}
            />
            <span className={utilStyles.error}>{telErrorText}</span>
            <p className={utilStyles.fontWeightBold}>メールアドレス</p>
            <input
              size="30"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.mailInput}
            />
            <span className={utilStyles.error}>{emailErrorText}</span>
            <p className={utilStyles.fontWeightBold}>お問い合わせ内容</p>
            <textarea
              cols="35"
              rows="5"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className={styles.contactInput}
            />
            <span className={utilStyles.error}>{contentErrorText}</span>
            <br />
            <button className={utilStyles.btn} type="submit" value="送信">
              送信
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Form;
