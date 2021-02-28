import styled from 'styled-components'

export const ChallengeBoxStyle = styled.div`
  width: 100%;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  .defaultChallenge {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    h4 {
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 2.125rem;
      text-align: center;
      color: #666666;
      max-width: 18.75rem;
      margin-bottom: 2.5rem;
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 279px;
      p {
        font-size: 1rem;
        line-height: 26px;
        color: #666666;
        max-width: 223px;
      }
    }
  }
  .Challenge {
    height: 100%;
    display: flex;
    flex-direction: column;
    header {
      width: 100%;
      max-width: 340px;
      margin: 0 auto;
      padding-top: 1.5625rem;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.875rem;
      text-align: center;
      color: #5965e0;
      padding-bottom: 1.5625rem;
      border-bottom: 1px solid #dcdde0;
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 2.375rem 3.8125rem 2rem 3.8125rem;
      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div {
          margin-top: 1.5rem;
          h3 {
            text-align: center;
            font-weight: 600;
            font-size: 1.875rem;
            line-height: 2.5rem;
            text-align: center;
            color: #2e384d;
          }
          p {
            margin-top: 0.5rem;
            font-size: 1rem;
            line-height: 1.625rem;
            text-align: center;
            color: #666666;
          }
        }
      }
      footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.5rem;
        width: 100%;
        button {
          width: 100%;
          height: 3.125rem;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
          color: #ffffff;
          border-radius: 5px;
          transition: background-color 0.3s;
          &.buttonFailed {
            background: #e83f5b;
            &:hover {
              background: #e4062b;
            }
          }
          &.buttonComplete {
            background: #4cd62b;
            &:hover {
              background: #42bf24;
            }
          }
        }
      }
    }
  }
`
