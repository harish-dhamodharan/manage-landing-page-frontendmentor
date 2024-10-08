import "./App.css";
import Footer from "./organisms/Footer/Footer";
import Header from "./organisms/Header/Header";
import Home from "./views/Home/Home";
import Simplify from "./views/Simplify/Simplify";
import Testimonials from "./views/Testimonials/Testimonials";
import What from "./views/What/What";

function App() {
  return (
    <div>
      <div className="rightImageBackground"></div>
      <Header />
      <Home />
      <What />
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
