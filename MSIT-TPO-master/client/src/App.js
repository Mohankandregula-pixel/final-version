import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/Errorpage";
import Logout from "./components/Logout";
import Update from "./components/Update";
import Resources from "./components/Resources";
import Admin from './components/Admin'
import Placed from './components/Placed'
import Credits from './components/Credits'
import Aboutadmin from './components/Aboutadmin'
import Postadmin from './components/Postadmin '
import AdminResources from './components/AdminResources '
import { initialState, reducer } from "./reducer/UseReducer";
import Library from "./components/Library";
import Edit from './components/Edit';


// we create a contextAPI 
export const UserContext = createContext();

  

const Routing = () => {
  
  return (
    
       <Switch>

      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/god">
        <Admin/>
      </Route>
      <Route path="/admin/about">
        <Aboutadmin />
      </Route>
      <Route path="/admin/post">
        <Postadmin />
      </Route>
      <Route path="/admin/resource">
        <AdminResources />
      </Route>


      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/Library">
        <Library />
      </Route>
      <Route path="/Placed">
        <Placed />
      </Route>

      <Route path="/Update">
        <Update />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
        
      <Route path="/logout">
        <Logout />
      </Route>
      
      <Route path="/Resources">
        <Resources />
      </Route>
      <Route path="/Credits">
        <Credits />
      </Route>
      <Route>
        <ErrorPage />
       

      </Route>

      <Route>
        {/* <ErrorPage /> */}
        <Edit />

      </Route>

      <Route path="/edit" >
        <Edit />
      </Route>
    </Switch>
    
  )
}

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />
      

      </UserContext.Provider>
  )
}

export default App

