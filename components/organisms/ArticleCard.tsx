import Link from 'next/link'

import { Badge, Date, UIIconStar } from '~/components/atoms'

import { Article } from 'types'

import { truncateString } from '~/lib/utils'

import articleCardStyles from '~/styles/components/organisms/articleCard.module.sass'

export const ArticleCard = ({ article }: { article: Article }) => (
  <Link href={`/articles/${article.id}`}>
    <a className={articleCardStyles.container} key={article.id}>
      <div className={articleCardStyles.hero}>
        <figure className={articleCardStyles.hero__imageContainer}>
          <img
            src={article.heroImage.url}
            alt={article.heroImage.altText}
            className={articleCardStyles.hero__image}
          />
        </figure>
        <Badge category={article.categories[0]} />
        <button className={articleCardStyles.hero__favoriteButton}>
          <UIIconStar />
        </button>
      </div>

      <div className={articleCardStyles.content}>
        <div className={articleCardStyles.heading}>
          <h3 className={articleCardStyles.title}>
            {article.title.length > 40
              ? `${article.title.substring(0, 38)}…`
              : article.title}
          </h3>
          <p className={articleCardStyles.overview}>
            {truncateString(article.overview)}
          </p>
        </div>
        <ul className={articleCardStyles.details}>
          <li className={articleCardStyles.author}>
            <img
              className={articleCardStyles.author__avatar}
              src={article.author.avatarUrl}
              alt={article.author.name}
            />
            <span className={articleCardStyles.author__name}>
              {article.author.name}
            </span>
          </li>
          <li className={articleCardStyles.date}>
            <Date dateString={article.publishDate} formatStyle="concise" />
          </li>
        </ul>
      </div>
    </a>
  </Link>
)
