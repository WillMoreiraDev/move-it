import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { CompleteChallengesStyle } from '../styles/components/CompleteChallenges'

export default function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <CompleteChallengesStyle>
      <h3>Desafios completos</h3>
      <span>{challengesCompleted}</span>
    </CompleteChallengesStyle>
  )
}
