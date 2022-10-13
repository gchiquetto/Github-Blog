import { formatDistanceToNow } from 'date-fns'

export function dateFormatter(date: string) {
  const formatDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  })

  const createdAt = formatDate.charAt(0).toUpperCase() + formatDate.slice(1)
  return createdAt
}
