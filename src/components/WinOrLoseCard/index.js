import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const status = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-card">
      <div className="image-section">
        <img src={imageUrl} alt="win or lose" className="resultant-image" />
      </div>
      <div className="details-section">
        <h1 className="result-status">{status}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="total-score">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
