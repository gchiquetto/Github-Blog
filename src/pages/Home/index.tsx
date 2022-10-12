import {
  HomeContainer,
  HomeContent,
  InfoContainer,
  Overview,
  ProfileCard,
  ProfileCardContent,
} from './styles'
import { ArrowSquareOut } from 'phosphor-react'
import { FaGithub, FaBuilding } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { FormSearch } from './components/FormSearch'
export function Home() {
  return (
    <HomeContainer>
      <ProfileCard>
        <img
          src="https://avatars.githubusercontent.com/u/74207793?s=400&u=35183fae2c4e2e7ebf75045e1183e106575b4c6e&v=4"
          alt=""
        />
        <ProfileCardContent>
          <header>
            <h1>Gabriela Chiquetto Policano</h1>
            <a href="https://github.com/gchiquetto">
              GITHUB <ArrowSquareOut />
            </a>
          </header>
          <p>A chemical engineer in transition to Frontend Developer</p>
          <InfoContainer>
            <span>
              <FaGithub />
              gchiquetto
            </span>
            <span>
              <FaBuilding />
              Enschede - Netherlands
            </span>
            <span>
              <BsPeopleFill />
              72 followers
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
      </HomeContent>
    </HomeContainer>
  )
}
