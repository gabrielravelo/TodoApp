import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks';
import { TodoEdit } from './TodoEdit';

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeletetodo, handleToggleTodo, handleNewTodo, handleDeleteAllTodo } = useTodo();

  return (
    <>
      <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
            onDeleteTodo={ handleDeletetodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd 
            onNewTodo={ handleNewTodo } 
          />
          <hr />
          <TodoEdit
            onDeleteAllTodo={ handleDeleteAllTodo } />
        </div>
      </div>
    </>
  )
}
