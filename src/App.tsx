import "./App.css";
import Header from "./organisms/Header/Header";
import Home from "./views/Home/Home";
import What from "./views/What/What";

function App() {
  return (
    <div>
      <div className="rightImageBackground"></div>
      <Header />
      <Home />
      <What />
    </div>
  );
}

export default App;
