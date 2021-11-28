import "./App.css";
import MainNavigation from "./components/shared/Navigation/MainNavigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Banner from "./pages/Home/Banner";
import Details from "./pages/Home/Details";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainNavigation />
            <Banner />
            <Details />
            <Footer />
          </Route>
          <Route path="/projects" exact>
            <MainNavigation />
            <Projects />
            <Footer />
          </Route>
          <Route path="/about" exact>
            <MainNavigation />
            <About />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
