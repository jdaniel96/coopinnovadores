import "./App.css";
import Footer from "./components/Footer";
import Herosection from "./components/hero/herosection";
import Navbar from "./components/nav/navbar";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
}

export default App;
