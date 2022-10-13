import {
  InfoContainer,
  PostContainer,
  PostContent,
  PostContentCode,
  PostContentText,
  PostInfoContainer,
} from './styles'
import { ArrowSquareOut, Calendar, CaretLeft, ChatCircle } from 'phosphor-react'
import { FaGithub } from 'react-icons/fa'

export function Post() {
  return (
    <PostContainer>
      <PostInfoContainer>
        <header>
          <a href="/">
            <CaretLeft />
            Back
          </a>
          <a href="https://github.com/gchiquetto">
            GITHUB <ArrowSquareOut />
          </a>
        </header>
        <h1>JavaScript data types and data structures</h1>
        <InfoContainer>
          <span>
            <FaGithub />
            gchiquetto
          </span>
          <span>
            <Calendar weight="fill" />1 day ago
          </span>
          <span>
            <ChatCircle weight="fill" />5 comments
          </span>
        </InfoContainer>
      </PostInfoContainer>
      <PostContent>
        <PostContentText>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>
        </PostContentText>
        <PostContentCode>
          <p>let foo = 42; // foo is now a number</p>
          <p>foo = ‘bar’; // foo is now a string</p>
          <p>foo = true; // foo is now a boolean</p>
        </PostContentCode>
      </PostContent>
    </PostContainer>
  )
}
