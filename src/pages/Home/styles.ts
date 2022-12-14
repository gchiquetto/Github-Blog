import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  @media (max-width: 865px) {
    padding: 0 1rem;
  }
`

export const ProfileCard = styled.div`
  display: flex;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;
  }

  a:hover {
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 758px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 580px) {
    padding: 1.5rem;
  }
`

export const ProfileCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-weight: 700;
      line-height: 130%;
      font-size: 1.5rem;
    }
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;

  span {
    display: flex;
    align-items: center;
    text-align: center;

    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    @media (max-width: 544px) {
      justify-content: space-between;

      span {
        flex: 0;
      }
    }

    @media (max-width: 480px) {
      gap: 0.875rem;
    }
  }
`

export const HomeContent = styled.main`
  margin-top: 4.5rem;
`

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostsCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 758px) {
    grid-template-columns: 1fr;
  }
`
export const EmptySearchContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme['base-border']};
  border-radius: 8px;
  gap: 0.5rem;

  strong {
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
`
