import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="title-and-logo-container">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <div className="title-container">
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-btn"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
