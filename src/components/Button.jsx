import React from 'react'
import styles from '../css/Button.module.css'
import rockImg from '../assets/rock.png'
import paperImg from '../assets/paper.png'
import scissorsImg from '../assets/scissors.png'

const imageMap = {
  rock: rockImg,
  paper: paperImg,
  scissors: scissorsImg,
}

function Button({ choiceKey, choice, onClick }) {
  return (
    <button className={`${styles.button} ${styles[choiceKey]}`} onClick={() => onClick(choiceKey)}>
      <img src={imageMap[choiceKey]} alt={choice.name} className={styles.icon} />
      {choice.name}
    </button>
  )
}

export default Button
