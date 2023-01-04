import './App.css';
import { useEffect } from "react";
import Navbar from './components/Navbar';
import { Home } from "./pages/Home";
import Footer from './components/Footer';
import Route from "./components/Route";
import { Signup } from "./pages/Signup";
import useProperties from "./hooks/useProperties";
import { PropertyDetails } from "./pages/PropertyDetails";


function App() {
  const properties = useProperties();

  /**
   * Since properties are required everywhere in the app we load properties on app-load
   */
  useEffect(() => {
    properties.loadProperties();
  }, []);

  return (
    <>
        <Navbar />
        <Route path="/">
        <Home />
        </Route>
        <Route path="/property-details">
        <PropertyDetails />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Footer />
    </>
  );
}


export default App;
