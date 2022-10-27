const limit = 100, // Max number of starts
  body = document.body;
loop = {
  // initializing
  start: () => {
    for (let i = 0; i <= limit; i++) {
      const star = this.newStar();
      star.style.top = this.rand() * 100 + "%";
      star.style.left = this.rand() * 100 + "%";
      star.style.webkitAnimationDelay = this.rand() + "s";
      star.style.mozAnimationDelay = this.rand() + "s";
      body.appendChild(star);
    }
  },
  // get random number
  rand: () => {
    return Math.random();
  },
  // creating html dom for stars
  newStar: () => {
    const d = document.createElement("div");
    d.innerHTML =
      '<figure className="star"><figure className="star-top"></figure><figure className="star-bottom"></figure></figure>';
    return d.firstChild;
  },
};
loop.start();
