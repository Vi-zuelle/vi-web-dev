function Technical(props) {
  return (
    <div className="technical">
      <div className="technical__inner">
        <div className="technical__text">{props.text}</div>
        <img
          className="technical__img"
          src={require(`../assets/img/${props.img}`)}
          alt={props.text}
          className="technical__img"
        />
      </div>
    </div>
  );
}

export default Technical;
