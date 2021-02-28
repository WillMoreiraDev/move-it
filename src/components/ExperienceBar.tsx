import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { ExperienceBarStyle } from '../styles/components/ExperienceBar'

export default function ExperinceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <ExperienceBarStyle>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className="current-experience"
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarStyle>
  )
}
