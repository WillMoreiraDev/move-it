import React, { useContext } from 'react'

import { ModalLevelUpStyle } from '../styles/components/ModalLevelUp'

import Twitter from '../assets/twitter.svg'
import Close from '../assets/close-modal.svg'
import { ChallengesContext } from '../contexts/ChallengesContext'

export default function ModalLevelUp() {
  const { isActiveModal, level, closeModal } = useContext(ChallengesContext)
  return (
    <>
      {isActiveModal && (
        <ModalLevelUpStyle>
          <div className="modal">
            <button onClick={closeModal}>
              <Close />
            </button>
            <div className="level">{level}</div>
            <h2>Parabéns</h2>
            <p>Você alcançou um novo level.</p>
            <a href="">
              Compartilhar no twitter <Twitter />
            </a>
          </div>
        </ModalLevelUpStyle>
      )}
    </>
  )
}
