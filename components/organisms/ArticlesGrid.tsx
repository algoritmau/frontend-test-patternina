import { ArticleCard } from '~/components/organisms/ArticleCard'

import articlesGridStyles from '~/styles/components/organisms/articlesGrid.module.sass'

import { Article } from 'types'

export const ArticlesGrid = ({ articles }: { articles: Article[] }) => (
  <section className={articlesGridStyles.container}>
    {articles.map((article) => (
      <ArticleCard article={article} key={article.id} />
    ))}
  </section>
)
