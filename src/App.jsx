import React, { useState } from 'react'
import styles from './css/App.module.css'
import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import rockImg from './assets/rock.png'
import paperImg from './assets/paper.png'
import scissorsImg from './assets/scissors.png'

const choices = {
  rock: { name: '바위', img: rockImg },
  paper: { name: '보', img: paperImg },
  scissors: { name: '가위', img: scissorsImg },
}

function getRandomChoice() {
  const keys = Object.keys(choices)
  const randomKey = keys[Math.floor(Math.random() * keys.length)]
  return choices[randomKey]
}

function determineWinner(user, computer) {
  if (user.name === computer.name) return '비겼다'
  if (
    (user.name === '가위' && computer.name === '보') ||
    (user.name === '바위' && computer.name === '가위') ||
    (user.name === '보' && computer.name === '바위')
  )
    return '이겼다'
  return '졌다'
}

function App() {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('')

  const handleChoice = key => {
    const user = choices[key]
    const computer = getRandomChoice()
    const gameResult = determineWinner(user, computer)

    setUserChoice(user)
    setComputerChoice(computer)
    setResult(gameResult)
  }

  const resetGame = () => {
    setUserChoice(null)
    setComputerChoice(null)
    setResult('')
  }

  return (
    <div className={styles.container}>
      <h1>가위바위보 게임</h1>
      <div className={styles.cardWrapper}>
        <Card title="너님" choice={userChoice} result={result} type="user" />
        <div className={styles.buttonWrapper}>
          {Object.keys(choices).map(key => (
            <Button key={key} choiceKey={key} choice={choices[key]} onClick={handleChoice} />
          ))}
          <div className={styles.resultButton}>{result ? result : '?'}</div>
          {userChoice && (
            <button className={styles.resetButton} onClick={resetGame}>
              다시하기
            </button>
          )}
        </div>
        <Card title="상대선수" choice={computerChoice} result={result} type="computer" />
      </div>
      <p className={styles.description}>
        버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요. 컴퓨터는 랜덤으로 선택합니다.
      </p>
    </div>
  )
}

export default App
