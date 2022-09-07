import { parseISO, format } from 'date-fns'

import { DateFormatStyle } from 'types'

export const Date = ({
  dateString,
  formatStyle
}: {
  dateString: string
  formatStyle: DateFormatStyle
}) => {
  const date = parseISO(dateString)
  const formats = {
    concise: 'MMM dd',
    full: 'LLLL d, yyyy'
  }

  return <time dateTime={dateString}>{format(date, formats[formatStyle])}</time>
}
