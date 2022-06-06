import singlePin from '../assets/singlePin.png'
import information from '../assets/information.png'

function Card(props) {
  let { title, city, googleMapsUrl, description, wikipedia, imageUrl, moreImages } = props.item;

  return (
    <div className="card">
      <div className="card--img">
        <img src={imageUrl} alt="place" />
        <a href={moreImages} target="_blank" rel="noreferrer">
          <div className="information">
            <img src={information} alt="information" />
            <span>Click for more images</span>
          </div>
        </a>
      </div>

      <div className="card--info">
        <div className="location">
          <img src={singlePin} alt="pin" />
          <h4>{city}</h4>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button href={wikipedia} target="_blank" rel="noreferrer">Explore more on Wikipedia</button>
      </div>
    </div>
  );
}

export default Card;
