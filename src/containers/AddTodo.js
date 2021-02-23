import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../styles/index.scss'

const AddTodo = ({ dispatch }) => {
  let inputTitle
  let inputCreator
  let inputDescription

  return (
    <div>
      <form /*onSubmit={e => {
        e.preventDefault()
        if (!inputTitle.value.trim() || !inputCreator.value.trim()  || !inputDescription.value.trim()) {
          return
        }
        dispatch(addTodo(inputTitle.value, inputCreator.value, inputDescription.value))
        inputTitle.value = '';
        inputCreator.value = '';
        inputDescription.value = '';
      }}*/>
        <div className="blockNewTask">
          <div className="blockNewTask__inputData">
            <div className="blockNewTask__itemList">
               <span>Title:</span>
               <input className="blockNewTask__inputTitle" ref={node => inputTitle = node} />
            </div>
            <div className="blockNewTask__itemList">
               <span>Creator:</span>
               <input className="blockNewTask__inputCreator" ref={node => inputCreator = node} />
            </div>
            <div className="blockNewTask__itemList">
                <span>Description:</span>
               <input className="blockNewTask__inputDescription" ref={node => inputDescription = node} />
            </div> 
          </div>
          <div className="blockNewTask__buttonAddToDo">
            <span onClick={e => {
                  e.preventDefault()
                  if (!inputTitle.value.trim() || !inputCreator.value.trim()  || !inputDescription.value.trim()) {
                    return
                  }
                  dispatch(addTodo(inputTitle.value, inputCreator.value, inputDescription.value))
                  inputTitle.value = '';
                  inputCreator.value = '';
                  inputDescription.value = '';
            }}>
              SAVE
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
