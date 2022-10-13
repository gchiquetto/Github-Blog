import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  @media (max-width: 865px) {
    padding: 0 1rem;
  }
`

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
    }
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    margin-top: 1.25rem;
  }

  @media (max-width: 580px) {
    padding: 1.5rem;
  }

  @media (max-width: 340px) {
    padding: 0.75rem;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }

  @media (max-width: 480px) {
    gap: 0.875rem;
  }
`

export const PostContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem 2rem;

  @media (max-width: 580px) {
    padding: 1.5rem;
  }

  @media (max-width: 340px) {
    padding: 0.75rem;
  }
`

export const PostContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }

  img {
    width: 100%;
  }

  pre {
    overflow-x: auto;
    color-scheme: dark;
  }

  code {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0.5rem;
    border-radius: 2px;
    padding: 1rem;
    font-family: 'Fira Code', monospace;
    background-color: ${(props) => props.theme['base-post']};
    min-width: fit-content;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background: hsla(0, 0%, var(--lightness), 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, var(--lightness), 0.7);
    border-radius: 0.5rem;
  }
`
