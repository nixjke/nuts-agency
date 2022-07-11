import React from 'react'

import s from './Button.module.scss'

export const Button = React.memo(({ right = false, onClick, disabled = false }) => {
  return (
    <>
      {right ? (
        <button onClick={onClick} className={`${s.button} ${s.right} ${disabled ? s.disabled : ''}`}></button>
      ) : (
        <button onClick={onClick} className={`${s.button} ${s.left} ${disabled ? s.disabled : ''}`}></button>
      )}
    </>
  )
})
