import { useContext } from "react";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer/footer";
import HeroSection from "./component/Hero";
/*import ProductList from "./component/productList/ProductList";
import Testimonial from "./component/Testimonial/testimonial";*/
import Timer from "./component/Timer/timer";
import Toggle from "./component/Toggle/toggle";
import Whatsapp from "./component/Whatsapp/whatsapp";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <HeroSection />
      <Timer />
      <About />

      <Contact />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
