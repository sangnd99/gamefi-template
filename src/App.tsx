import { BrowserRouter } from "react-router-dom";
import Router from "routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 500, startEvent: "load" });
    Aos.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
