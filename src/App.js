import "./App.css";
import Index from "./pages/index";
import AnimePage from "./pages/AnimePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/anime-info/:animeId" component={AnimePage} />
          <Route exact="*" component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
