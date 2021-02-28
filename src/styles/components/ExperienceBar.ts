import styled from 'styled-components'

import { fadeLeft } from '../pages/Home'

export const ExperienceBarStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8.125rem;
  animation: ${fadeLeft} 0.6s forwards;
  & > div {
    position: relative;
    flex: 1;
    max-width: 845px;
    height: 4px;
    background: var(--gray-line);
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    & > div {
      background: var(--green);
      height: 4px;
    }
    .current-experience {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }
  span {
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: var(--text);
    display: block;
  }
`
