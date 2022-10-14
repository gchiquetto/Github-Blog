import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  header {
    display: flex;
    gap: 1rem;
  }

  a {
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme['base-title']};
  }

  a:hover {
    color: ${(props) => props.theme.blue};
  }

  span {
    min-width: fit-content;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }

  .postcard_content {
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }
`
