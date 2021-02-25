import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddTodo from '../containers/AddTodo'
// function IsEditing() {
//   const [isEditing, setEditing] = useState(false);
// }
const Todo = ({ onClick, handleDeleteTask, handleEditTask, textInput, completed, textTitle, textCreator, textDescription, status }) => ( 
    <div >
      <li 
          onClick={onClick} 
          /*style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}*/
      >
           <div className="blockItemTaskList__itemTaskList">
              <span> Title: {textTitle} </span> 
              <span> Creator: {textCreator} </span>
              <span> Description: {textDescription} </span> 
              <span> Status: {status}</span>
            </div>  
      </li>
      {/*<span onClick={handleDeleteTask}>Delete</span>
      <div>
          <input type="text" placeholder={textTitle} ></input>
          <span onClick={handleEditTask}>Edit</span>
        </div>*/}
    </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  texta: PropTypes.string.isRequired
}

export default Todo
