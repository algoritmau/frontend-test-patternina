export interface Article {
  id: string
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

export type DateFormatStyle = 'full' | 'concise'
