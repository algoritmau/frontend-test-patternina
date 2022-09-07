export const getAllArticles = async () => {
  const articlesData = await fetch(`${process.env.API_BASE_URL}/articles`)
  const articles = await articlesData.json()

  return articles.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllArticlesIds = async () => {
  const articles = await getAllArticles()

  return articles.map((article) => {
    return {
      params: {
        id: article.id as string
      }
    }
  })
}

export const getArticleData = async (id: string) => {
  const articlePayload = await fetch(
    `${process.env.API_BASE_URL}/articles/${id}`
  )
  const article = await articlePayload.json()

  return article
}
