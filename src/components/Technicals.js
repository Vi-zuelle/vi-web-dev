import Technical from "./Technical";

const Technicals = () => {
  return (
    <section className="container technicals" id="technicals">
      <h2>_technical</h2>
      <div className="technicals__content">
        <Technical text="NPM" img="npm.svg" />
        <Technical text="GIT" img="github.svg" />
        <Technical text="Sass" img="sass.svg" />
        <Technical text="Bootstrap" img="bootstrap.svg" />
        <Technical text="JS ES2015" img="js.svg" />
        <Technical text="React" img="react.svg" />
        <Technical text="PHP" img="php-elephant.svg" />
        <Technical text="Wordpress" img="wordpress.svg" />
        <Technical text="Ruby" img="ruby.svg" />
        <Technical text="Ruby on Rails" img="rails.svg" />
      </div>
    </section>
  );
};

export default Technicals;
