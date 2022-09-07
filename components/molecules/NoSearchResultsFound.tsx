import { Button } from '../atoms'

import noSearchResultsFoundStyles from '~/styles/components/molecules/noSearchResultsFound.module.sass'

export const NoSearchResultsFound = ({ callback }) => (
  <div className={noSearchResultsFoundStyles.container}>
    <h2 className={noSearchResultsFoundStyles.title}>You got us there!</h2>
    <p className={noSearchResultsFoundStyles.description}>
      We couldn’t find any articles for your search. Please try a different
      topic, like React, JavaScript, or Design.
    </p>
    <Button
      type="medium"
      text="Return to all posts"
      onClickCallback={callback}
    />
  </div>
)
