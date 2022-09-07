import { useState, useEffect } from 'react'

import Head from 'next/head'

import { BackToTopButton } from '~/components/atoms'
import { Footer } from '~/components/molecules'
import { Header } from '~/components/organisms'

import LayoutStyles from '~/styles/base/layout.module.sass'

export const Layout = ({
  children,
  isUserLoggedIn,
  home
}: {
  children: React.ReactNode
  isUserLoggedIn?: boolean
  home?: boolean
}) => {
  const [shouldShowBackToTopButton, setShouldShowBackToTopButton] =
    useState(false)

  const handleScroll = () => setShouldShowBackToTopButton(window.scrollY > 500)

  useEffect(() => {
    setShouldShowBackToTopButton(window.scrollY > 500)

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={LayoutStyles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A blog about Web Development and UX Design"
        />
        <meta
          name="og:title"
          content="Landkit — A blog about Web Development and UX Design"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isUserLoggedIn={isUserLoggedIn} />
      <main className={LayoutStyles.main}>{children}</main>
      <Footer />
      {!home && shouldShowBackToTopButton && <BackToTopButton />}
    </div>
  )
}
