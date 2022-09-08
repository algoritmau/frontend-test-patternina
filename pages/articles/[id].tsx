import { GetStaticProps, GetStaticPaths } from 'next'

import Head from 'next/head'
import Link from 'next/link'

import { Layout } from '~/components/templates'
import { Date, SocialMediaIcon } from '~/components/atoms'

import { getAllArticles, getArticleData } from '~/lib/articles'

import typographyStyles from '~/styles/base/typography.module.sass'
import articleStyles from '~/styles/components/templates/article.module.sass'

export default function Article({ article }: { article: Article }) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <article className={articleStyles.container}>
        <div className={articleStyles.header}>
          <h1 className={`${typographyStyles.h1} ${articleStyles.title}`}>
            {article.title}
          </h1>
          <p className={articleStyles.overview}>{article.overview}</p>
          <div className={articleStyles.details}>
            <div className={articleStyles.meta}>
              <figure className={articleStyles.meta__avatar}>
                <img
                  className={articleStyles.meta__avatar__image}
                  src={article.author.avatarUrl}
                  alt={article.author.name}
                />
              </figure>
              <ul className={articleStyles.meta__misc}>
                <li className={articleStyles.meta__author}>
                  {article.author.name}
                </li>
                <li className={articleStyles.meta__date}>
                  Published on{' '}
                  <Date dateString={article.publishDate} formatStyle="full" />
                </li>
              </ul>
            </div>
            <ul className={articleStyles.shareOptions}>
              <li className={articleStyles.shareOptions__label}>Share:</li>
              <li className={articleStyles.shareOptions__item}>
                <Link href="instagram.com">
                  <a className={articleStyles.shareOptions__link}>
                    <SocialMediaIcon name="instagram" />
                  </a>
                </Link>
              </li>
              <li className={articleStyles.shareOptions__item}>
                <Link href="facebook.com">
                  <a className={articleStyles.shareOptions__link}>
                    <SocialMediaIcon name="facebook" />
                  </a>
                </Link>
              </li>
              <li className={articleStyles.shareOptions__item}>
                <Link href="twitter.com">
                  <a className={articleStyles.shareOptions__link}>
                    <SocialMediaIcon name="twitter" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <main className={articleStyles.body}>
          <figure className={articleStyles.billboard}>
            <img
              className={articleStyles.billboard__image}
              src={article.heroImage.url}
              alt={article.heroImage.altText}
            />
            <figcaption className={articleStyles.billboard__caption}>
              {article.heroImage.caption}
            </figcaption>
          </figure>
          {article.body.split('\n').map((paragraph, index) => (
            <p key={index} className={articleStyles.paragraph}>
              {paragraph}
            </p>
          ))}
        </main>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getArticleData(params.id as string)

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles()
  const paths = []

  articles.forEach((article) => {
    paths.push({
      params: {
        id: article.id
      }
    })
  })

  return {
    paths,
    fallback: false
  }
}

interface Article {
  id: number
  title: string
  overview: string
  categories: string[]
  author: {
    name: string
    avatarUrl: string
  }
  publishDate: string
  heroImage: {
    url: string
    altText: string
    caption: string
  }
  body: string
}
