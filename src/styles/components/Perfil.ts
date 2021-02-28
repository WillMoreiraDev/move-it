import styled from 'styled-components'

export const PerfilStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3.5rem;
  & > img {
    max-width: 88px;
    border-radius: 50%;
    margin-right: 1.4375rem;
  }
  & > div {
    flex: 1;
    h3 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 1.8125rem;
      color: #2e384d;
      margin-bottom: 0.5625rem;
    }
    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 9px;
      }
      span {
        font-size: 1rem;
        line-height: 1.1875rem;
        color: #666666;
      }
    }
  }
`
