import Link from 'next/link'

import { Logo } from '~/components/atoms'

import headerStyles from '~/styles/components/organisms/header.module.sass'

export const Header = ({ isUserLoggedIn }: { isUserLoggedIn: boolean }) => (
  <header className={headerStyles.container}>
    <nav className={headerStyles.nav}>
      <Link href="/">
        <a className={headerStyles.nav__logo}>
          <Logo />
        </a>
      </Link>
      <ul className={headerStyles.nav__browsingActions}>
        <li className={headerStyles.nav__browsingAction}>
          <button className={headerStyles.nav__browsingAction__button}>
            Articles
          </button>
        </li>
        <li className={headerStyles.nav__browsingAction}>
          <button
            className={headerStyles.nav__browsingAction__button}
            disabled={!isUserLoggedIn}
          >
            Favorites
          </button>
        </li>
      </ul>
      <button className={headerStyles.nav__browsingAction__button}>
        {isUserLoggedIn ? 'Sign Out' : 'Sign In'}
      </button>
    </nav>
  </header>
)
