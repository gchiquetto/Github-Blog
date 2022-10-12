import styled from 'styled-components'

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-text']};
  margin-top: 0.75rem;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:active {
    border-color: ${(props) => props.theme.blue};
  }
`
