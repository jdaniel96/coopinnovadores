import "./App.css";
import Footer from "./components/Footer";
import Herosection from "./components/hero/herosection";
import Navbar from "./components/nav/navbar";
import Cards from "./components/Cards/Cards";
import ContactUs from "./components/Contact/Contact";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Herosection />
      <Cards />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
