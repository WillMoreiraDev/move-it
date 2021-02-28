import React, { useState, useEffect, useContext } from 'react'

import { CountDownStyle } from '../styles/components/Countdown'

import IconPlay from '../assets/play_arrow.svg'
import IconClose from '../assets/close.svg'
import Checked from '../assets/checked.svg'

import { CountdownContext } from '../contexts/CountdownContext'

export default function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <CountDownStyle>
      <div className="countdown">
        <div className="minutesContainer">
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div className="secondsContainer">
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled>
          Ciclo encerrado <Checked />
        </button>
      ) : (
        <>
          {!isActive ? (
            <button className="btn-init" onClick={startCountdown}>
              Iniciar um ciclo <IconPlay />
            </button>
          ) : (
            <button className="btn-close" onClick={resetCountdown}>
              Abandonar ciclo <IconClose />
            </button>
          )}
        </>
      )}
    </CountDownStyle>
  )
}
