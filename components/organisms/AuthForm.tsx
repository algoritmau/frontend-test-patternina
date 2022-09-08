import { useState } from 'react'

import { Button, UIIconClose } from '~/components/atoms'

import authFormStyles from '~/styles/components/organisms/authForm.module.sass'

export const AuthForm = ({
  closeModalHandler,
  signInFormSubmit,
  signUpFormSubmit,
  nameInputValue,
  emailInputValue,
  passwordInputValue,
  handleNameInput,
  handleEmailInput,
  handlePasswordInput
}) => {
  const [hasAccount, setHasAccount] = useState(true)

  const handleSignInFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signInFormSubmit()
  }

  const handleSignUpFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signUpFormSubmit()
  }

  return (
    <div className={authFormStyles.container}>
      <button
        className={authFormStyles.closeButton}
        onClick={closeModalHandler}
      >
        <UIIconClose />
      </button>

      <figure className={authFormStyles.imageContainer}>
        <img
          className={authFormStyles.image}
          src="/assets/images/woman-laughing.png"
          alt="A woman laughing at the office"
        />
      </figure>

      <form
        className={authFormStyles.main}
        onSubmit={hasAccount ? handleSignInFormSubmit : handleSignUpFormSubmit}
      >
        <div className={authFormStyles.content}>
          <h3 className={authFormStyles.title}>
            {hasAccount ? 'Sign In' : 'Sign Up'}
          </h3>
          <p className={authFormStyles.description}>
            Simplify your reading in minutes.
          </p>
          {!hasAccount && (
            <fieldset className={authFormStyles.fieldset}>
              <legend className="sr-only">Full name</legend>
              <label className="sr-only" htmlFor="email">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={nameInputValue}
                placeholder="Full name"
                className={authFormStyles.input}
                onChange={handleNameInput}
              />
            </fieldset>
          )}
          <fieldset className={authFormStyles.fieldset}>
            <legend className="sr-only">Email address</legend>
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={emailInputValue}
              placeholder="Email address"
              className={authFormStyles.input}
              onChange={handleEmailInput}
            />
          </fieldset>
          <fieldset className={authFormStyles.fieldset}>
            <legend className="sr-only">Password</legend>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={passwordInputValue}
              placeholder="Password"
              className={authFormStyles.input}
              onChange={handlePasswordInput}
            />
          </fieldset>

          <p className={authFormStyles.authHelp}>
            {hasAccount ? "Don't have an account?" : 'Already have an account?'}
            <button
              type="button"
              className={authFormStyles.authHelpButton}
              onClick={() => setHasAccount(!hasAccount)}
            >
              {!hasAccount ? 'Sign In' : 'Sign Up'}
            </button>
          </p>

          <Button
            text={hasAccount ? 'Sign In' : 'Sign Up'}
            type="medium"
            onClickCallback={hasAccount ? signInFormSubmit : signUpFormSubmit}
          />
        </div>
      </form>
    </div>
  )
}
