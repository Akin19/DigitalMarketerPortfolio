import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
// import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import PortfolioDigital from "./Components/PortfolioDigital/PortfolioDigital";
const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      {/* <Portfolio /> */}
      <PortfolioDigital />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
