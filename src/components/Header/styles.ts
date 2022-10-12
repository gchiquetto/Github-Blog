import styled from 'styled-components'
import cover from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    margin-top: 4rem;
    width: 9.25rem;
    height: 6.125rem;
  }
`
