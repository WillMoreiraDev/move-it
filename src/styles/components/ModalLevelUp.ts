import styled, { keyframes } from 'styled-components'

import Flowers from '../../assets/flowers.png'

import { fadeUp } from '../components/ChallengeBox'

export const EffectShow = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const ModalLevelUpStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2020;
  background: rgb(242 243 245 / 0.1);
  backdrop-filter: blur(8px);
  animation: ${EffectShow} 0.3s forwards;
  .modal {
    position: relative;
    background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 24.8125rem;
    padding: 2.5rem 3.125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${fadeUp} 0.3s forwards;
    button {
      border: none;
      background: transparent;
      position: absolute;
      right: 8px;
      top: 8px;
    }
    .level {
      font-weight: 600;
      font-size: 8.75rem;
      line-height: 6.25rem;
      color: #5965e0;
      text-align: center;
      text-shadow: 0px 10px 16px rgba(89, 101, 224, 0.3);
      margin-bottom: 1.5rem;
      width: 153.03px;
      height: 93.39px;
      background: url(${Flowers}) no-repeat center center;
    }
    h2 {
      font-weight: 600;
      font-size: 1.875rem;
      line-height: 2.5rem;
      text-align: center;
      color: #2e384d;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.875rem;
      text-align: center;
      color: #666666;
      margin-bottom: 2rem;
    }
    a {
      background: #2aa9e0;
      border-radius: 5px;
      padding: 0.9375rem 2.5rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1rem;
      color: #ffffff;
      transition: background-color 0.3s;
      svg {
        margin-left: 1rem;
      }
      &:hover {
        background: #209fd6;
      }
    }
  }
`
