import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`

export const ProfileCard = styled.div`
  display: flex;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
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
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
