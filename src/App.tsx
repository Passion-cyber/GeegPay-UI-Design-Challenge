import "./App.css";
import AppRoutes from "./appRoutes/appRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
};

export default App;
