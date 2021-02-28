import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext
} from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'

let countdownTimeout: null | ReturnType<typeof setTimeout> = null

interface CountdownContextData {
  minutes: number
  seconds: number
  barButtonCompleted: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountdownProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const timeStart = 0.1 * 60

  const [time, setTime] = useState(timeStart)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [barButtonCompleted, setBarButtonCompleted] = useState(0)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(timeStart)
    setHasFinished(false)
    setBarButtonCompleted(0)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
        setBarButtonCompleted(100 - ((time - 1) / timeStart) * 100)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
      setBarButtonCompleted(0)
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        barButtonCompleted,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
