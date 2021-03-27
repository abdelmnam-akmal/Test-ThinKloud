import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./pages/layout/Navbar/index";
import Meal from "./pages/Meal/index";
import Order from "./pages/Order/index";
import Reports from "./pages/Reports/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route path="/" exact component={Order} />
        <Route path="/meal" component={Meal} />
        <Route path="/reports" component={Reports} />
      </div>
    </Router>
  );
}

export default App;
