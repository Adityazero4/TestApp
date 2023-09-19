import "./App.css";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import ServicePage from "./components/ServicePage";
import Contactpage from "./components/Contactpage";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Aboutpage />
      <ServicePage />
      <Contactpage />
    </div>
  );
}

export default App;
