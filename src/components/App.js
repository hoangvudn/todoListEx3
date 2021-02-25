import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SearchTodo from '../containers/SearchTodo'
import MyComponent from '../component/TestAjax'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => (
  /*<div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>*/  
   <Router>
      <div>
         <SearchTodo />
         <MyComponent style={{ width:'200px', height:'100px'}}/>
        <ul className="sideBar"> 
           <li className="sideBar__topLeft">
             <Link to="/AddTodo"> Creat New Task </Link>
           </li>
           <li className="sideBar__topLeft">
             <Link to="/VisibleTodoList"> All Task </Link>
           </li>
           {/*<li className="sideBar__topLeft">
             <Link to="/Footer"> Footer </Link>
            </li>*/}
        </ul>
         
        <Switch>
          <Router path="/AddTodo">
            <AddTodo />
          </Router>
          <Router path="/VisibleTodoList">
            <VisibleTodoList />
          </Router>
          <Router path="/Footer">
            <Footer />
          </Router>
        </Switch>
      </div>
    </Router>
)

export default App
