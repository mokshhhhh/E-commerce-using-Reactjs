import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
