import ReactMarkdown from 'react-markdown'
import { PostCardContainer } from './styles'
import gfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'

interface UserIssuesFormatData {
  data: {
    title: string
    id: number
    html_url: string
    body: string
    comments: number
    created_at: string
  }
}

export function PostCard({ data }: UserIssuesFormatData) {
  const formatDate = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
  })

  const createdAt = formatDate.charAt(0).toUpperCase() + formatDate.slice(1)

  return (
    <PostCardContainer>
      <header>
        <h2>{data.title}</h2>
        <span>{createdAt}</span>
      </header>

      <ReactMarkdown remarkPlugins={[gfm]} className="postcard_content">
        {data.body.substring(0, 150) + '...'}
      </ReactMarkdown>
    </PostCardContainer>
  )
}
