import categoryPillStyles from '~/styles/components/atoms/CategoryPill.module.sass'

export const CategoryPill = ({ category }: { category: string }) => {
  const categoryClassMap = {
    CSS: categoryPillStyles.css,
    Debugging: categoryPillStyles.debugging,
    'Design Patterns': categoryPillStyles.designPatterns,
    iOS: categoryPillStyles.ios,
    JavaScript: categoryPillStyles.javascript,
    npm: categoryPillStyles.npm,
    'Open Source': categoryPillStyles.openSource,
    OSLog: categoryPillStyles.oslog,
    Performance: categoryPillStyles.performance,
    'React.js': categoryPillStyles.react,
    Remix: categoryPillStyles.remix,
    'Research Methods': categoryPillStyles.researchMethods,
    StoreKit: categoryPillStyles.storekit,
    Strategy: categoryPillStyles.strategy,
    Swift: categoryPillStyles.swift,
    SwiftUI: categoryPillStyles.swiftui,
    Tooling: categoryPillStyles.tooling,
    TypeScript: categoryPillStyles.typescript,
    'User Testing': categoryPillStyles.userTesting,
    'UX Design': categoryPillStyles.uxDesign,
    Xcode: categoryPillStyles.xcode
  }

  return (
    <div
      className={`${categoryPillStyles.container} ${categoryClassMap[category]}`}
    >
      {category}
    </div>
  )
}
