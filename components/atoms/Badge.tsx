import badgeStyles from '~/styles/components/atoms/badge.module.sass'

export const Badge = ({ category }: { category: string }) => {
  const customClass = `badge--${category}`

  return (
    <div className={`${badgeStyles.badge} ${badgeStyles[customClass]}`}>
      {category}
    </div>
  )
}
