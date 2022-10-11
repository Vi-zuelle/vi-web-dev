import Experience from '../components/Experience';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Technicals from '../components/Technicals';

function Home() {
  return(
    <div className="home-page">
      <Intro />
      <Skills/>
      <Experience/>
      <Technicals/>
    </div>
  )
}

export default Home;
