import { CategoryPill } from '~/components/atoms/CategoryPill'

import categoryVialBottleStyles from '~/styles/components/molecules/CategoryVialBottle.module.sass'

export const CategoryVialBottle = ({
  categories
}: {
  categories: string[]
}) => {
  return (
    <ul className={categoryVialBottleStyles.container}>
      {categories.map((category) => (
        <li key={category} className={categoryVialBottleStyles.item}>
          <CategoryPill category={category} />
        </li>
      ))}
    </ul>
  )
}
