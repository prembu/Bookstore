import "./App.css";
import Navbar from "./componants/Navbar";
import Banner from "./componants/Banner";
import Footer from "./componants/Footer";
import Freebook from "./componants/Freebook";

function App() {
  return (
    <>
      <div className="comtainer">
        <Navbar />
        <Banner />
        <Freebook/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
