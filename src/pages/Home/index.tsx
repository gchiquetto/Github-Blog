import {
  HomeContainer,
  HomeContent,
  InfoContainer,
  Overview,
  PostsCardsContainer,
  ProfileCard,
  ProfileCardContent,
} from './styles'
import { ArrowSquareOut } from 'phosphor-react'
import { FaGithub, FaBuilding } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { FormSearch } from './components/FormSearch'
import { PostCard } from './components/PostCard'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface UserCardInfo {
  login?: string
  id?: number
  node_id?: string
  avatar_url?: string
  gravatar_id?: string
  url?: string
  html_url?: string
  followers_url?: string
  following_url?: string
  gists_url?: string
  starred_url?: string
  subscriptions_url?: string
  organizations_url?: string
  repos_url?: string
  events_url?: string
  received_events_url?: string
  type?: string
  site_admin?: false
  name?: string
  company?: string
  blog?: string
  location?: string
  email?: string
  hireable?: string
  bio?: string
  twitter_username?: string
  public_repos?: number
  public_gists?: number
  followers?: number
  following?: number
  created_at?: string
  updated_at?: string
}

export function Home() {
  const [userData, setUserData] = useState<UserCardInfo>({})

  async function fetchUserInformations(username: string) {
    const response = await api.get(`/users/${username}`)
    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserInformations('gchiquetto')
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
          <p>6 posts</p>
        </Overview>
        <FormSearch />
        <PostsCardsContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsCardsContainer>
      </HomeContent>
    </HomeContainer>
  )
}
