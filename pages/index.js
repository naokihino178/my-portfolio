import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Profile from './Profile'

export default function Home ({ allPostsData }) { 
  return (
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {/* プロフィール */}
        <Profile />
      </>
  )
}
