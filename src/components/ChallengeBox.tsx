import React, { useContext, useState } from 'react'

import { ChallengeBoxStyle } from '../styles/components/ChallengeBox'

import UpLevel from '../assets/up-level.svg'
import body from '../assets/body.png'
import eye from '../assets/eye.png'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )

  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <ChallengeBoxStyle>
      {!activeChallenge ? (
        <div className="defaultChallenge">
          <h4>Inicie um ciclo para receber desafios a serem completados</h4>
          <div>
            <UpLevel />
            <p>Complete-os e ganhe experiência e avance de leve.</p>
          </div>
        </div>
      ) : (
        <div className="Challenge">
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <div>
              {activeChallenge.type === 'body' ? (
                <img src={body} alt="" />
              ) : (
                <img src={eye} alt="" />
              )}

              <div>
                <h3>Exercite-se</h3>
                <p>{activeChallenge.description}</p>
              </div>
            </div>
            <footer>
              <button className="buttonFailed" onClick={handleChallengeFailed}>
                Falhei
              </button>
              <button
                className="buttonComplete"
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </main>
        </div>
      )}
    </ChallengeBoxStyle>
  )
}
