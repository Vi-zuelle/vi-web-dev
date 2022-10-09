import Experience from './components/Experience';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Technicals from './components/Technicals';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, I'm Vi</h1>
      </header>
      <content>
        <Intro />
        <Skills/>
        <Experience/>
        <Technicals/>
      </content>
    </div>
  );
}

export default App;
