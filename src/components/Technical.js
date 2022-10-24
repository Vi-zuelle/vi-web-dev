import React from "react";

function Technical(props) {
  return (
    <div className="technical">
      <div className="technical__inner">
        <div className="technical__text">{props.text}</div>
        <img
          className="technical__img"
          src={require(`../assets/img/${props.img}`)}
          alt={props.text}
        />
      </div>
    </div>
  );
}

export default Technical;
