function Technical(props) {
  return (
    <div className="technical">
      <span>{props.text}</span>
      <img src={require(`../assets/img/${props.img}`)} alt={props.text} className="technical__img" />
    </div>
  )
}

export default Technical;