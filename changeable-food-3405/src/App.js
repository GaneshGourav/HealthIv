import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Components/AllRoutes";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Signup } from "./Pages/signup";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <AllRoutes /> 
    <Signup/>
     
    </div>
  );
}

export default App;
