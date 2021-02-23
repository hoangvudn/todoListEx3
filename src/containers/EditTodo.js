import React from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../actions'

const EditTodo = ({ id,text, dispatch }) => {
  //let input

  return (
    <div>
       <span onClick={(e) => {
             e.preventDefault()
             dispatch(editTodo(id,text))
       }}>EDIT TODO</span>
    </div>
  )
}

export default connect()(EditTodo)
