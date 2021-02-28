import React, { useContext } from 'react'

import { PerfilStyle } from '../styles/components/Perfil'

import IconUp from '../assets/up.svg'
import { ChallengesContext } from '../contexts/ChallengesContext'

export default function Perfil() {
  const { level } = useContext(ChallengesContext)
  return (
    <PerfilStyle>
      <img src="https://avatars.githubusercontent.com/willmoreiradev" alt="" />
      <div>
        <h3>Will Moreira</h3>
        <div>
          <IconUp />
          <span>Level {level}</span>
        </div>
      </div>
    </PerfilStyle>
  )
}
