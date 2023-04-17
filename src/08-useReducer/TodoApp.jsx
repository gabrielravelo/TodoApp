import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks';
import { TodoEdit } from './TodoEdit';
import { TodoFilter } from './TodoFilter';

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeletetodo, handleToggleTodo, handleNewTodo, handleAddAllTodo, handleDeleteAllTodo, handlePendingAllTodo, showAllCompletedTodo, showAllPendingTodo, showAllTodo } = useTodo();

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
          <h4>Editar todos los TODO's</h4>
          <TodoEdit
            onAddAllTodo={ handleAddAllTodo }
            onDeleteAllTodo={ handleDeleteAllTodo }
            onPendingAllTodo={ handlePendingAllTodo } 
          />
          <hr />
          <h4>Filtrar TODO's</h4>
          <TodoFilter
            todos={ todos }
            onShowAllCompletedTodo={ showAllCompletedTodo }
            onShowAllPendingTodo={ showAllPendingTodo }
            onShowAllTodo={ showAllTodo }
          />
        </div>
      </div>
    </>
  )
}
