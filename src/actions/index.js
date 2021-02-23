let nextTodoId = 0
export const addTodo = (textTitle, textCreator, textDescription) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  textTitle,
  textCreator,
  textDescription
})
export const searchTodo = (textTitle) => ({
  type: 'SEARCH_TODO',
  textTitle
})
export const removeTodo = id => ({
   type: 'DELETE_TODO',
   id: id
})
export const editTodo = (id,text) => ({
   type: 'EDIT_TODO',
   id: id,
   text
})
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
