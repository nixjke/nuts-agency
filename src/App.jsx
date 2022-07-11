import React from 'react'

import s from './App.module.scss'

import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'

import card from './components/Card/card.png'

function App() {
  const cards = [
    {
      img: card,
      date: '10.11.2020 г.',
      title: 'Юрий Колокольников пытается спасти Землю в клипе «Космические силы»',
      content: 'Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.',
    },
    {
      img: card,
      date: '10.11.2020 г.',
      title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
      content:
        'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
    },
    {
      img: card,
      date: '10.11.2020 г.',
      title: 'BTS получили четыре награды MTV EMA',
      content:
        'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
    },
    {
      img: card,
      date: '10.11.2020 г.',
      title: 'Открытие сезона «Ла Скала» отменено',
      content:
        'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
    },
    {
      img: card,
      date: '10.11.2020 г.',
      title: 'Юрий Колокольников пытается спасти Землю в клипе «Космические силы»',
      content: 'Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.',
    },
    {
      img: card,
      date: '10.11.2020 г.',
      title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
      content:
        'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
    },
    {
      img: card,
      date: '10.11.2020 г.',
      title: 'BTS получили четыре награды MTV EMA',
      content:
        'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
    },
    {
      img: card,
      date: '10.11.2020 г.',
      title: 'Открытие сезона «Ла Скала» отменено',
      content:
        'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
    },
  ]

  const [swipePx, setSwipePx] = React.useState(0)

  const swipePxRef = React.useRef()

  swipePxRef.current = swipePx

  const swipeLeft = React.useCallback(() => {
    setSwipePx(prevState => {
      if (swipePxRef.current < 0) return prevState
      return prevState - 300
    })
  }, [])

  const swipeRight = React.useCallback(() => {
    setSwipePx(prevState => {
      if ((cards.length * 300) / 2 === swipePxRef.current) return prevState
      return prevState + 300
    })
  }, [])

  const boxRef = React.useRef()

  React.useEffect(() => {
    console.log(swipePx)
  }, [swipePx])

  return (
    <div className={s.app}>
      <div className={s.content}>
        <div className={s.nav}>
          <h1 className={s.title}>Актуальное</h1>
          <div className={s.navInner}>
            <div>bar</div>
            <div className={s.buttons}>
              <Button onClick={swipeLeft} />
              <Button onClick={swipeRight} right />
            </div>
          </div>
        </div>
        <div ref={boxRef} className={s.box} style={{ transform: `translate3d(-${swipePx}px, 0px, 0px)` }}>
          {cards.map((card, index) => (
            <Card onClick={e => console.log(e)} key={index}>
              {card}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
