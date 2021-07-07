import logo from "./logo.svg";
import "./App.css";
import "./Nav.css";
import VaccineForm from "./VaccineForm.jsx";
import VaccineForm1 from "./VaccineForm1.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ByPin">Book By Pin</Link>
              </li>
              <li>
                <Link to="/ByCalandar">Book By Calandar</Link>
              </li>
            </ul>
          </nav>
          <h1>Vaccine Booking</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/ByPin">
              <div>Search By Pin Code</div>
              <VaccineForm />
              <div id="vCenter"></div>
              <div id="result"></div>
              <div id="result2"></div>
            </Route>
            <Route path="/ByCalandar">
              <div>Search By Date</div>
              <VaccineForm1 />
              <div id="vCenter"></div>
              <div id="result"></div>
              <div id="result2"></div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}
export default App;
