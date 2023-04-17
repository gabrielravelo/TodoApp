import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodo = () => {
  
  // const initialState = [];

  const [ todos, dispatch ] = useReducer( todoReducer, [], init )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ) );
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };

    dispatch( action );
  }

  const handleDeletetodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

  const handleAddAllTodo = () => {
    dispatch({
      type: '[TODO] Complete All Todos'
    });
  }

  const handleDeleteAllTodo = () => {
    dispatch({
      type: '[TODO] Delete All Todo'
    });
  }

  const handlePendingAllTodo = () => {
    dispatch({
      type: '[TODO] Pending All Todos'
    });
  }

  const showAllCompletedTodo = () => {
    dispatch({
      type: '[TODO] Show All Completed Todo'
    });
  }

  const showAllPendingTodo = () => {
    dispatch({
      type: '[TODO] Show All Pending Todo'
    });
  }
  
  const showAllTodo = () => {
    dispatch({
      type: '[TODO] Show All Todo'
    });
  }

  return {
    todos, 
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
    handleDeletetodo, 
    handleToggleTodo, 
    handleNewTodo,
    handleAddAllTodo,
    handleDeleteAllTodo,
    handlePendingAllTodo,
    showAllCompletedTodo,
    showAllPendingTodo,
    showAllTodo,
  }
}
