import "./App.css";
import Footer from "./components/Footer";
import Herosection from "./components/hero/herosection";
import Navbar from "./components/nav/navbar";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Herosection />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
