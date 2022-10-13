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
          <div class="bubble x1">transparent</div>
          <div class="bubble x2">curious</div>
          <div class="bubble x3">attentive</div>
          <div class="bubble x4">creative</div>
          <div class="bubble x5">logic</div>
          <div class="bubble x6">team player</div>
          <div class="bubble x7">authentic</div>
          <div class="bubble x8">involved</div>
          <div class="bubble x9">positive</div>
          <div class="bubble x10">autonomous</div>
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
