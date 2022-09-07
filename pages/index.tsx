import { GetStaticProps } from 'next'

import Head from 'next/head'

import { useSession, signIn, signOut } from 'next-auth/react'

import { getAllArticles } from '@/lib/articles'

import { Layout } from '~/components/templates'
import { ArticleCard, ArticlesGrid } from '~/components/organisms'

import { Article } from 'types'

export default function Home({ articles }: { articles: Article[] }) {
  const { data: session } = useSession()
  let isUserLoggedIn: boolean

  if (session) {
    isUserLoggedIn = true
  } else {
    isUserLoggedIn = false
  }

  return (
    <Layout home isUserLoggedIn={isUserLoggedIn}>
      <Head>
        <title>Landkit — A blog about Web Development and UX Design</title>
      </Head>
      <h1 className="sr-only">
        Welcome to Landkit, a blog about Web Development and UX Design
      </h1>
      <section>
        <ArticlesGrid>
          {articles.map((article: Article) => (
            <ArticleCard article={article} />
          ))}
        </ArticlesGrid>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllArticles()

  return {
    props: {
      articles
    }
  }
}
