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

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  span {
    min-width: fit-content;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`