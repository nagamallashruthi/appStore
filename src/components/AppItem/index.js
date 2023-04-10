// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemList} = props
  const {appName, imageUrl, category} = appItemList
  return (
    <li className="li1">
      <img src={imageUrl} alt={appName} className="img1" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
