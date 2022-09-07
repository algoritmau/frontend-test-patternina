import BackToTopButtonStyles from '~/styles/components/atoms/backToTopButton.module.sass'

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export const BackToTopButton = () => (
  <button
    className={BackToTopButtonStyles.backToTopButton}
    onClick={handleClick}
  >
    Back
    <br />
    To
    <br />
    Top
  </button>
)
