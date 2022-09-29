// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails

  return (
    <li className="card-item-container">
      <img src={imgUrl} className="profile-pic" alt={name} />
      <p className="item-name"> {name} </p>
    </li>
  )
}

export default DestinationItem
