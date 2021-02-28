import React, { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import Icon from '../assets/favicon.png'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  isActiveModal: boolean
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeModal: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] =
    rest.level === 0 ? useState(1) : useState(rest.level)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  )
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const [isActiveModal, setIsActiveModal] = useState(false)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1)
    setIsActiveModal(true)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function closeModal() {
    setIsActiveModal(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      const notify = new Notification('Novo desafio', {
        icon: Icon,
        body: `Valendo ${challenge.amount}xp! 🎖`
      })
    }
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel

      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        isActiveModal,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeModal
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
