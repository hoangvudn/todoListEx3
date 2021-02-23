import React from 'react'
import { connect } from 'react-redux'
import { searchTodo } from '../actions'
import '../styles/index.scss'

const SearchTodo= ({ dispatch }) => {
  let inputTitle
  return (
    <div>
      <form>
        <div className="blockSearchToDo">
          <div className="blockSearchToDo__inputData">
            <div className="blockSearchToDo__itemList">
               <input className="blockSearchToDo__inputTitle" ref={node => inputTitle = node} placeholder="not working...updating..."/>
            </div>
          </div>
          <div className="blockSearchToDo__buttonSearchToDo">
            <span onClick={e => {
                  e.preventDefault()
                  if (!inputTitle.value.trim()) {
                    return
                  }
                  dispatch(searchTodo(inputTitle.value))
                  //inputTitle.value = '';
            }}>
              SEARCH
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect()(SearchTodo)
