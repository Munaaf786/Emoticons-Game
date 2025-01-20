import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const emojiClicked = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="emoji-button" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
