const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          textTitle: action.textTitle,
          textCreator: action.textCreator,
          textDescription: action.textDescription,
          status: "new",
          completed: false
        }
      ]
    case 'SEARCH_TODO':
      const newArray = [];
      return state.map(todo =>
        (todo.textTitle === action.textTitle)
          ? {...todo, textTitle: !todo.textTitle}
          : todo
        )
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELETE_TODO':
      // const arrList = [...state];
      // const indexTask = arrList.findIndex(item => item.id === action.id)
      // arrList.splice(indexTask,1)
      //return arrList;
      return state.filter(todo => todo.id !== action.id);
    case 'EDIT_TODO':
    const arrList = [...state];
          state.map(item => {
            if(item.id === action.id) {
                item.text = action.text
            }
          });
    return arrList;
    default:
      return state
  }
}

export default todos
