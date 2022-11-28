
import Header from "./components/header/Header";
import Body from "./components/Body/Body";
import Bodily from "./components/Bodily/Bodily";
import Bodified from "./components/Bodified/Bodified";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Bodily />
      <Bodified /> 
      <Footer />
    </div>
  );
};

export default App;
