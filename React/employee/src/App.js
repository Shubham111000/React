import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/Home">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contactus">Contactus</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/ListEmployee">ListEmployee</Link>{" "}
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
