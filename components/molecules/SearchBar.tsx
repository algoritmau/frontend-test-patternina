import { Button, UIIconSearch } from '~/components/atoms'

import searchBarStyles from '~/styles/components/molecules/searchBar.module.sass'

export const SearchBar = ({
  value,
  handleSearch,
  searchFormSubmit,
  resultsCount
}) => {
  return (
    <form className={searchBarStyles.container} onSubmit={searchFormSubmit}>
      <fieldset className={searchBarStyles.content}>
        <legend className="sr-only">Search</legend>
        <label className="sr-only" htmlFor="search">
          Search
        </label>
        <div className={searchBarStyles.left}>
          <UIIconSearch />
          <input
            type="text"
            id="search"
            name="search"
            value={value}
            placeholder="Search"
            className={searchBarStyles.input}
            onChange={handleSearch}
          />
        </div>
        <div className={searchBarStyles.right}>
          <span className={searchBarStyles.resultsCount}>{`${
            resultsCount === 0 ? 'No ' : resultsCount
          } result${resultsCount === 1 ? '' : 's'}`}</span>
          <Button text="Search" type="small" />
        </div>
      </fieldset>
    </form>
  )
}
