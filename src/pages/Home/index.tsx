import { useEffect, useState } from 'react'
import {
  EmptySearchContainer,
  HomeContainer,
  HomeContent,
  InfoContainer,
  Overview,
  PostsCardsContainer,
  ProfileCard,
  ProfileCardContent,
} from './styles'
import { ArrowSquareOut, SmileySad } from 'phosphor-react'
import { FaGithub, FaBuilding } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { FormSearch } from './components/FormSearch'
import { PostCard } from './components/PostCard'
import { api } from '../../lib/axios'

interface UserCardInfo {
  login?: string
  id?: number
  avatar_url?: string
  html_url?: string
  name?: string
  location?: string
  bio?: string
  public_repos?: number
  followers?: number
  following?: number
  created_at?: string
}

interface UserIssuesFormat {
  title: string
  id: number
  html_url: string
  body: string
  comments: number
  created_at: string
  number: number
}

export function Home() {
  const [userData, setUserData] = useState<UserCardInfo>({})
  const [userIssues, setUserIssues] = useState<UserIssuesFormat[]>([])

  async function fetchUserInformations(username: string) {
    const response = await api.get(`/users/${username}`)
    setUserData(response.data)
  }

  async function fetchUserRepoIssues(username: string, query?: string) {
    const url = query
      ? `/search/issues?q=${query}%20repo:${username}/Github-Blog`
      : `/search/issues?q=%20repo:${username}/Github-Blog`

    const response = await api.get(url)
    const data = response.data
    setUserIssues([...data.items])
  }

  useEffect(() => {
    fetchUserInformations('gchiquetto')
    fetchUserRepoIssues('gchiquetto')
  }, [])

  return (
    <HomeContainer>
      <ProfileCard>
        <img src={userData.avatar_url} alt="" />
        <ProfileCardContent>
          <header>
            <h1>{userData.name}</h1>
            <a href={userData.html_url}>
              GITHUB <ArrowSquareOut />
            </a>
          </header>
          <p>{userData.bio}</p>
          <InfoContainer>
            <span>
              <FaGithub />
              {userData.login}
            </span>
            <span>
              <FaBuilding />
              {userData.location}
            </span>
            <span>
              <BsPeopleFill />
              {userData.followers} followers
            </span>
          </InfoContainer>
        </ProfileCardContent>
      </ProfileCard>

      <HomeContent>
        <Overview>
          <h2>Posts</h2>
          <p>{userIssues.length} posts</p>
        </Overview>
        <FormSearch fetchUserRepoIssues={fetchUserRepoIssues} />
        {userIssues.length === 0 ? (
          <EmptySearchContainer>
            <SmileySad size={64} />
            <strong>Oh no, no issues found</strong>
            <p>Try searching for another word</p>
          </EmptySearchContainer>
        ) : (
          <PostsCardsContainer>
            {userIssues.map((issue) => (
              <PostCard key={issue.id} data={issue} />
            ))}
          </PostsCardsContainer>
        )}
      </HomeContent>
    </HomeContainer>
  )
}
