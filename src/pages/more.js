import { useEffect } from "react";

const MorePage = () => {
  useEffect(() => {
    document.body.classList.add("more-layout");
    return () => {
      document.body.remove("more-layout");
    };
  }, []);
  return (
    <div className="more container">
      <div className="more__content">
        <h2>_Know me more</h2>
        <p>
          I guess that if you are here, it is because you are interested in the
          human you might hire.
        </p>
      </div>

      <div className="more__values">
        <div className="more__value-wrapper">
          <div className="more__value__text"></div>
          <div class="bubble x1">Transparent</div>
          <div class="bubble x2">Curious</div>
          <div class="bubble x3">Benevolent</div>
          <div class="bubble x4">Creative</div>
          <div class="bubble x5">Logic</div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div>

        {/* <div className="bubble--text x1 more__value-wrapper">
          <div className="more__value__text">Curious</div>
        </div>

        <div className="more__value-wrapper">
          <div className="more__value__text">Benevolent</div>
        </div>

        <div className="more__value-wrapper">
          <div className="more__value__text">Curious</div>
        </div>

        <div className="more__value-wrapper">
          <div className="more__value__text">Curious</div>
        </div> */}
      </div>
    </div>
  );
};

export default MorePage;
