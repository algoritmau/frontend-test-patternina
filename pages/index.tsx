import { useEffect, useState } from 'react'

import { GetStaticProps } from 'next'

import Head from 'next/head'

import { useSession, signIn, signOut } from 'next-auth/react'

import { getAllArticles } from '~/lib/articles'

import { Layout } from '~/components/templates'
import { ArticlesGrid } from '~/components/organisms'
import { NoSearchResultsFound, SearchBar } from '~/components/molecules'

import { Article } from 'types'

export default function Home({ articles }: { articles: Article[] }) {
  // Articles state for search
  const [searchedArticles, setSearchedArticles] = useState(articles)
  const [searchValue, setSearchValue] = useState('')
  const [isShowingSearchResults, setIsShowingSearchResults] = useState(false)

  // Authentication
  const { data: session } = useSession()
  let isUserLoggedIn: boolean

  if (session) {
    isUserLoggedIn = true
  } else {
    isUserLoggedIn = false
  }

  const handleSearchSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setIsShowingSearchResults(true)

    handleSearchResults()
  }

  const handleSearchResults = () => {
    const filteredArticles = articles.filter((article) =>
      article.categories
        .join(' ')
        .toLowerCase()
        .includes(searchValue.toLowerCase().trim())
    )

    setSearchedArticles(filteredArticles)
  }

  const clearSearchResults = () => {
    setIsShowingSearchResults(false)
    setSearchValue('')
  }

  useEffect(() => {
    handleSearchResults()
  }, [searchValue])

  return (
    <Layout home isUserLoggedIn={isUserLoggedIn}>
      <Head>
        <title>Landkit — A blog about Web Development and UX Design</title>
      </Head>

      <h1 className="sr-only">
        Welcome to Landkit, a blog about Web Development and UX Design
      </h1>

      <SearchBar
        value={searchValue}
        handleSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        searchFormSubmit={handleSearchSubmit}
        resultsCount={searchedArticles.length}
      />

      {!isShowingSearchResults && <ArticlesGrid articles={articles} />}

      {isShowingSearchResults && searchedArticles.length !== 0 && (
        <ArticlesGrid articles={searchedArticles} />
      )}

      {isShowingSearchResults && searchedArticles.length === 0 && (
        <NoSearchResultsFound callback={clearSearchResults} />
      )}
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
