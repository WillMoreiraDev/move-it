import styled, { keyframes } from 'styled-components'

export const fadeLeft = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`

export const fadeRight = keyframes`
  from {
    transform: translateX(30px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 960px;

  h1 {
    font-size: 3.375rem;
    font-family: 'Rajdhani', sans-serif;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const SectionMainStyle = styled.section`
  display: grid;
  grid-template-columns: 389px 1fr;
  grid-gap: 100px;
  align-items: center;
  .leftContainer {
    animation: ${fadeLeft} 0.5s forwards;
  }
  .rightContainer {
    animation: ${fadeRight} 0.5s forwards;
  }
`
