import { format } from 'date-fns'

export const formatDate = (unixDate: number): string => {
  const date = new Date(unixDate * 1000)
  const formattedDate = format(date, 'EEEE, LLL d')
  return formattedDate
}
