import Experience from './components/Experience';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Technicals from './components/Technicals';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './assets/style/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <content>
        <Intro />
        <Skills/>
        <Experience/>
        <Technicals/>
      </content>
      <Footer />
    </div>
  );
}

export default App;
