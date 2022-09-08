import { useState, useEffect } from 'react'

import Head from 'next/head'

import { AuthForm, Header, modalStyles } from '~/components/organisms'
import { Footer } from '~/components/molecules'
import { BackToTopButton } from '~/components/atoms'

import Modal from 'react-modal'

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
  // Modal state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  // Auth form values
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  // Back to top button
  const [shouldShowBackToTopButton, setShouldShowBackToTopButton] =
    useState(false)

  const handleScroll = () => setShouldShowBackToTopButton(window.scrollY > 500)

  // Auth modal
  const openAuthModal = () => {
    setIsAuthModalOpen(true)
  }

  const closeAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  const signInHandler = () => {
    // TODO: Sign in logic
    console.log('Signing in...')
  }

  const signUpHandler = () => {
    // TODO: Sign up logic
    console.log('Signing up...')
  }

  const signOutHandler = () => {
    // TODO: Sign out logic
    console.log('Signing out...')
  }

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

      <Header
        isUserLoggedIn={isUserLoggedIn}
        signOutCallback={signOutHandler}
        openModalCallback={openAuthModal}
      />
      <main className={LayoutStyles.main}>{children}</main>
      <Footer />

      {!home && shouldShowBackToTopButton && <BackToTopButton />}

      <Modal isOpen={isAuthModalOpen} preventScroll={true} style={modalStyles}>
        <AuthForm
          closeModalHandler={closeAuthModal}
          signInFormSubmit={signInHandler}
          signUpFormSubmit={signUpHandler}
          nameInputValue={nameValue}
          emailInputValue={emailValue}
          passwordInputValue={passwordValue}
          handleNameInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNameValue(e.target.value)
          }
          handleEmailInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmailValue(e.target.value)
          }
          handlePasswordInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordValue(e.target.value)
          }
        />
      </Modal>
    </div>
  )
}
