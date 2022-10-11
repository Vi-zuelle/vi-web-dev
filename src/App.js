import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import More from "./pages/More";
import Contact from "./pages/Contact";
import Stars from "./components/layout/Stars";
import "./assets/style/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/know-more" element={<More />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <Stars />
    </div>
  );
}

export default App;
