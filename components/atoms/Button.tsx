import { UIIconArrow } from '~/components/atoms/UIIconArrow'

import buttonStyles from '~/styles/components/atoms/button.module.sass'

export const Button = ({
  text,
  type,
  onClickCallback
}: {
  text: string
  type: ButtonType
  onClickCallback?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  let isLarge = false

  const altClasses = {
    small: buttonStyles.small,
    medium: buttonStyles.medium,
    large: buttonStyles.large
  }

  if (type === 'large') {
    isLarge = true
  }

  return (
    <button
      className={`${buttonStyles.container} ${altClasses[type]}`}
      onClick={onClickCallback}
    >
      <span className={buttonStyles.text}>{text}</span>
      {isLarge && (
        <span className={buttonStyles.icon}>
          <UIIconArrow />
        </span>
      )}
    </button>
  )
}

type ButtonType = 'small' | 'medium' | 'large'
