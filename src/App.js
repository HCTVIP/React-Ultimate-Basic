
import "./App.scss";
import Header from "./components/Header/Header";
import {Outlet, Link} from "react-router-dom"

const App = () =>{
  
    return (
      <div className="app-container">
        <div className="header-container">
            <Header />
        </div>
        <div classname="main-container">
          <div className="sidenav-container">
            SIDE BAR
          </div>
          <div className="app-container">
              <Outlet/>
          </div>
        </div>
      </div>
    );
  }

export default App;
