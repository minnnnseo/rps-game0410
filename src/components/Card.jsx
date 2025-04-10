import React from 'react'
import styles from '../css/Card.module.css'
import questionImg from '../assets/questionmark.png'

function Card({ title, choice, result, type }) {
  const image = choice ? choice.img : questionImg
  let resultText = ''
  let resultStyle = ''

  if (choice) {
    if (result === '비겼다') resultStyle = styles.draw
    else if ((result === '이겼다' && type === 'user') || (result === '졌다' && type === 'computer'))
      resultStyle = styles.win
    else resultStyle = styles.lose

    resultText =
      type === 'user'
        ? result
        : result === '이겼다'
          ? '졌다'
          : result === '졌다'
            ? '이겼다'
            : '비겼다'
  }

  return (
    <div className={`${styles.card} ${resultStyle}`}>
      <h2>{title}</h2>
      <img src={image} alt="선택" />
      {!choice && <p className={styles.instruction}>선택하세요</p>}
      {choice && <p>{resultText}</p>}
    </div>
  )
}

export default Card
