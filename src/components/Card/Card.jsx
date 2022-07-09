import React from 'react'
import s from './Card.module.scss'

export const Card = ({ children }) => {
  const { img, date, title, content } = children

  const cardRef = React.useRef()

  const handleMove = e => {
    console.log(e.offsetX)
  }

  React.useEffect(() => {
    cardRef.current.addEventListener('touchstart', handleMove)

    cardRef.current.removeEventListener('mousedown', handleMove)
  }, [])

  return (
    <div ref={cardRef} className={s.card}>
      <div className={s.cardInner}>
        <img className={s.img} src={img} draggable={false} />
        <div className={s.date}>{date}</div>
        <div className={s.title}>{title}</div>
        <div className={s.content}>{content}</div>
      </div>
    </div>
  )
}
