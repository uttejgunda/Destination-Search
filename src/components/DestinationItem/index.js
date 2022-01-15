import './index.css'

const DestinationItem = props => {
  const {place} = props
  const {name, imgUrl} = place
  return (
    <li className="each-place">
      <div>
        <img src={imgUrl} className="image" alt={name} />
      </div>
      <p className="place-name"> {name} </p>
    </li>
  )
}

export default DestinationItem
