import footerStyles from '~/styles/components/molecules/footer.module.sass'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={footerStyles.container}>
      <p className={footerStyles.legal}>
        Copyright © {currentYear} Landkit. All rights reserved.
      </p>
    </footer>
  )
}
