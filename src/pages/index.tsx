import React, { useContext, useEffect } from 'react'
import cookie from 'cookie'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import ExperienceBar from '../components/ExperienceBar'
import Perfil from '../components/Perfil'

import { SectionMainStyle } from '../styles/pages/Home'
import CompleteChallenges from '../components/CompleteChallenges'
import CountDown from '../components/Countdown'
import ChallengeBox from '../components/ChallengeBox'

import { CountdownProvider } from '../contexts/CountdownContext'
import {
  ChallengesContext,
  ChallengesProvider
} from '../contexts/ChallengesContext'
import ModalLevelUp from '../components/ModalLevelUp'

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}

interface ICookies {
  allcookies: {
    level: number
    currentExperience: number
    challengesCompleted: number
  }
}

export default function Home(props: ICookies) {
  const { level, currentExperience, challengesCompleted } = props.allcookies

  return (
    <ChallengesProvider
      level={Number(level)}
      currentExperience={Number(currentExperience)}
      challengesCompleted={Number(challengesCompleted)}
    >
      <div className="container">
        <Head>
          <title>Move.it</title>
        </Head>

        <ExperienceBar />

        <SectionMainStyle>
          <CountdownProvider>
            <div className="leftContainer">
              <Perfil />
              <CompleteChallenges />
              <CountDown />
            </div>
            <div className="rightContainer">
              <ChallengeBox />
            </div>
          </CountdownProvider>
        </SectionMainStyle>
      </div>
      <ModalLevelUp />
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = parseCookies(
    ctx.req
  )

  return {
    props: {
      allcookies: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted)
      }
    }
  }
}
