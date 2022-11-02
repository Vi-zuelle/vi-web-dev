import { useEffect } from "react";
import { Link } from "react-router-dom";

const MorePage = () => {
  useEffect(() => {
    document.body.classList.add("more-layout");
    return () => {
      document.body.classList.remove("more-layout");
    };
  });

  return (
    <div className="more container">
      <div className="more__content">
        <h2>_Know me more</h2>
        <p>
          I guess that if you are here, it is because you are interested in the
          human you might hire.
        </p>
        <p>
          I started my "real" work life as a data analyst until I decided to own
          the geek part of myself. That is how, end of 2019 I had been through a
          coding bootcamp of 9 intensive and wonderful weeks &#64; &nbsp;
          <a
            href="https://www.lewagon.com/montreal"
            target="_blank"
            rel="noreferrer"
            className="ext-link"
          >
            Le&nbsp;Wagon
          </a>
          . (If you find me on the picture, I owe you a free hug). In 2020 I got
          small jobs there and there. Until I got hired in March 2021 &#64;
          &nbsp;
          <a
            href="https://www.vortexsolution.com/en/"
            target="_blank"
            rel="noreferrer"
            className="ext-link"
          >
            Vortex&nbsp;Solution
          </a>
          . Since then, I live a great life with amazing colleagues in a family
          ambiance.
        </p>
        <p>
          In the meantime, I have been expressing my creativity by experimenting
          many things, like video editing, DJing, painting, for example. I also
          spend most of my time into self improvements through meditation,
          workshops, conferences. I do love music and dancing. How to tell you
          that I never get bored!
        </p>
        <p>
          I don't really know how to describe myself, but if I have to do so, I
          would go by my values. My fundamental values are : honesty,
          transparency, authenticity, kindness, attentiveness, fairness. I try
          my best to be all that!
        </p>
        <p>
          Also I think I am kind of logic, curious, involved, team player,
          positive, autonomous, and creative.
        </p>
        <p>
          This seems to be a good fit?{" "}
          <Link to="/contact-me" className="ext-link">
            Let's talk!
          </Link>
        </p>
      </div>

      <div className="more__values">
        <div className="more__value-wrapper">
          <div className="bubble x1">transparent</div>
          <div className="bubble x2">curious</div>
          <div className="bubble x3">attentive</div>
          <div className="bubble x4">creative</div>
          <div className="bubble x5">kind</div>
          <div className="bubble x6">team player</div>
          <div className="bubble x7">authentic</div>
          <div className="bubble x8">involved</div>
          <div className="bubble x9">positive</div>
          <div className="bubble x10">autonomous</div>
        </div>
      </div>
    </div>
  );
};

export default MorePage;
