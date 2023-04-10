// Write your code here
import './index.css'

const TabItem = props => {
  const {tabs, updateButton, isActive} = props
  const {tabId, displayText} = tabs

  const onClickButton = () => {
    updateButton(tabId)
  }

  const activeTabBtn = isActive ? 'active-btn' : ''

  return (
    <li className="li shadow">
      <button
        type="button"
        className={`btn ${activeTabBtn}`}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
