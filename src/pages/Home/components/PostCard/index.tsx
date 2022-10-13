import ReactMarkdown from 'react-markdown'
import { PostCardContainer } from './styles'
import gfm from 'remark-gfm'
import { dateFormatter } from '../../../../utils/formatter'

interface UserIssuesFormatData {
  data: {
    title: string
    id: number
    html_url: string
    body: string
    comments: number
    created_at: string
    number: number
  }
}

export function PostCard({ data }: UserIssuesFormatData) {
  const createdAt = dateFormatter(data.created_at)

  return (
    <PostCardContainer>
      <header>
        <a href={`/post/${data.number}`}>{data.title}</a>
        <span>{createdAt}</span>
      </header>

      <ReactMarkdown remarkPlugins={[gfm]} className="postcard_content">
        {data.body.substring(0, 150) + '...'}
      </ReactMarkdown>
    </PostCardContainer>
  )
}
