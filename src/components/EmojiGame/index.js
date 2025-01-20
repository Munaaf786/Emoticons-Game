/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  shuffleEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    if (clickedEmojisList.includes(id)) {
      this.finishGameAndSetTopScore(clickedEmojisList.length)
    } else {
      if (emojisList.length - 1 === clickedEmojisList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  renderEmojiCards = () => {
    const shuffledEmojisList = this.shuffleEmojisList()

    return (
      <ul className="emoji-cards-list">
        {shuffledEmojisList.map(eachEmojiCard => (
          <EmojiCard
            key={eachEmojiCard.id}
            emojiDetails={eachEmojiCard}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    const {topScore} = this.state
    this.setState({
      clickedEmojisList: [],
      isGameInProgress: true,
      topScore,
    })
  }

  renderResult = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {clickedEmojisList, topScore, isGameInProgress} = this.state

    return (
      <div className="bg-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="body-container">
          {isGameInProgress ? this.renderEmojiCards() : this.renderResult()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
