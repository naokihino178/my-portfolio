import { parseISO, format } from 'date-fns'

// 日付をISO規格の形に変換するコンポーネント
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}