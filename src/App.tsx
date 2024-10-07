import "./App.css";
import Header from "./organisms/Header/Header";
import Home from "./views/Home/Home";
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
    </div>
  );
}

export default App;
