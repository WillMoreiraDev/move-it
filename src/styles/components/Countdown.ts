import styled from 'styled-components'

export const CountDownStyle = styled.div`
  .countdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    div {
      width: 176px;
      height: 144px;
      background: #ffffff;
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      &:first-child {
        span {
          &:first-child {
            border-right: 2px solid #f0f1f3;
          }
        }
      }
      &:last-child {
        span {
          &:first-child {
            border-right: 2px solid #f0f1f3;
          }
        }
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-weight: 600;
        font-size: 7.5rem;
        font-family: Rajdhani;
        color: #2e384d;
      }
    }
    & > span {
      font-family: Rajdhani;
      font-weight: 600;
      font-size: 6.5rem;
      color: #2e384d;
    }
  }
  button {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    border: none;
    outline: none;
    transition: all 0.3s ease;
    svg {
      margin-left: 8px;
      path {
        transition: fill 0.3s ease;
      }
    }
    &[disabled] {
      position: relative;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 5px;
      font-weight: 600;
      font-size: 1.25rem;
      color: #666666;
      pointer-events: none;
      &:after {
        content: '';
        width: 100%;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #4cd62b;
        border-radius: 0px 0px 5px 5px;
      }
    }
    &.btn-init {
      background: #5965e0;
      &:hover {
        background: #4953b8;
      }
    }
    &.btn-close {
      background: #ffffff;
      color: #666666;
      &:hover {
        background: #e83f5b;
        color: #ffffff;
        svg {
          path {
            fill: #fff;
          }
        }
      }
    }
  }
`
