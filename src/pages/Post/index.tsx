import {
  InfoContainer,
  PostContainer,
  PostContent,
  PostContentText,
  PostInfoContainer,
} from './styles'
import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle } from 'phosphor-react'
import { FaGithub } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { dateFormatter } from '../../utils/formatter'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

interface IssuesFormat {
  title?: string
  id?: number
  html_url?: string
  body?: string
  comments?: number
  created_at?: string
  number?: number
  user?: { login: string }
}

export function Post() {
  const { postId } = useParams()
  const [issue, setIssue] = useState<IssuesFormat>({})

  const id = Number(postId)
  console.log(id)

  async function fetchUserRepoIssue(username: string) {
    const response = await api.get(
      `/repos/${username}/Github-Blog/issues/${id}`,
    )
    setIssue(response.data)
  }

  useEffect(() => {
    fetchUserRepoIssue('gchiquetto')
  }, [])

  const createdAt = issue.created_at && dateFormatter(issue.created_at)
  return (
    <PostContainer>
      <PostInfoContainer>
        <header>
          <a href="/">
            <CaretLeft />
            Back
          </a>
          <a href={issue.html_url}>
            GITHUB <ArrowSquareOut />
          </a>
        </header>
        <h1>{issue.title}</h1>
        <InfoContainer>
          <span>
            <FaGithub />
            {issue.user?.login}
          </span>
          <span>
            <Calendar weight="fill" />
            {createdAt}
          </span>
          <span>
            <ChatCircle weight="fill" />
            {issue.comments} comments
          </span>
        </InfoContainer>
      </PostInfoContainer>
      <PostContent>
        <PostContentText>
          {issue.body && (
            <ReactMarkdown remarkPlugins={[gfm]}>{issue.body}</ReactMarkdown>
          )}
        </PostContentText>
      </PostContent>
    </PostContainer>
  )
}
