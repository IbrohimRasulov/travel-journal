function Card(props) {
  let { title, city, googleMapsUrl, vikipedia, imageUrl, moreImages } = props.item;

  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={imageUrl} alt="" />
    </div>
  );
}

export default Card;
