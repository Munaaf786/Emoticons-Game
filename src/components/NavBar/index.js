import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <navbar className="navbar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="game-logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>

      {isGameInProgress && (
        <div className="score-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </navbar>
  )
}

export default NavBar
