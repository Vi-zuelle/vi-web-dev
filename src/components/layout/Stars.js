const Stars = () => {
  const createStars = () => {
    let content = [];
    for (let i = 1; i < 100; i++) {
      let randomLeft = Math.floor(Math.random() * window.innerWidth);
      let randomTop = Math.floor(Math.random() * window.innerHeight);

      content.push(
        <div
          className="star"
          key={`star-${i}`}
          id={`star-${i}`}
          style={{ top: `${randomTop}px`, left: `${randomLeft}px` }}
        ></div>
      );
    }
    return content;
  };

  return <div>{createStars()}</div>;
};

export default Stars;
