import React from 'react'
import s from './Card.module.scss'

export const Card = ({ children }) => {
  const { img, date, title, content } = children

  return (
    <div className={s.card}>
      <div className={s.cardInner}>
        <img className={s.img} src={img} draggable={false} />
        <div className={s.date}>{date}</div>
        <div className={s.title}>{title}</div>
        <div className={s.content}>{content}</div>
      </div>
    </div>
  )
}
