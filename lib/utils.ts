export const truncateString = (str: string) =>
  str.length > 80 ? `${str.substring(0, 60)}…` : str
