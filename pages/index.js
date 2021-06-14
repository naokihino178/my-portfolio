import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Profile from "./Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Profile />
    </>
  );
}
