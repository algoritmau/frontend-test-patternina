import articlesGridStyles from '~/styles/components/organisms/articlesGrid.module.sass'

export const ArticlesGrid = ({ children }: { children: React.ReactNode }) => (
  <div className={articlesGridStyles.container}>{children}</div>
)
