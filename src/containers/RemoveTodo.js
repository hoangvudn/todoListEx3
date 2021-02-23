import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

const RemoveTodo = ({ id, dispatch }) => {
  //let input

  return (
    <div>
       <span onClick={(e) => {
             e.preventDefault()
             dispatch(removeTodo(id))
       }}>Delete TODO</span>
    </div>
  )
}

export default connect()(RemoveTodo)
