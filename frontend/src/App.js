import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


import addToSlot from "./components/addToSlot.js";
import Login from "./components/login.js"
import ParkingLotsAvailable from "./components/parkingLotsAvailable.js"
import SlotDetails from "./components/SlotDetails.js"
import "./styling/mainPage.css";








function App() {

  //set null to user and setUser is a functions to setUser
const [user,setUser]=React.useState(null);

async function login(user=null){

    setUser(user);

  }

  async function logout(){

    setUser(null);

  }


  

  return (
   
    <div>
      <nav className="Navbar">      
            <a href="/parkingSlots" className="navIcon">
            </a>
        <div className="navOptions">
          <li>
            <Link to={'/parking_lots/addSlot'} className="navOption1">                          
                ParkingSlots
            </Link>
          </li>
          <li>
            { user ? (
                  <a onClick={logout} className="logout_Icon" style={{cursor:'pointer'}} >
                    Logout {user.name}
                  </a>
              ) : (
                <Link to={"/login"} className="login_Icon">
                  Login
                </Link>
              )}
          </li>
      </div>
    </nav>
    <div>
    <Routes>

      <Route  path="/" element={<ParkingLotsAvailable/>} exact/>
      <Route
            path="/parking_lots/addSlot"
            render={(props)=>(
                  <addToSlot {...props} user={user}/>
              )}
      />

      <Route
            path="/prkLot/manageLot"
            render={(props)=>(
                <SlotDetails {...props} user={user}/>
              )
            }
      />

      <Route
            path="/prkLot/login"
            render={(props)=>(
                <Login {...props} login={login}/>
              )}
      />

    </Routes>

    </div>

  </div>
  
  );
}

export default App;