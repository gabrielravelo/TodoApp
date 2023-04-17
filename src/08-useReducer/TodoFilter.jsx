
export const TodoFilter = ({ todos, onShowAllCompletedTodo, onShowAllPendingTodo, onShowAllTodo }) => {
  return (
    <div className="d-flex gap-3">
      <button 
        type="button" 
        className="btn btn-outline-success mt-3 position-relative"
        onClick={ onShowAllCompletedTodo }
      >
        Completados
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          { todos.filter( todo => todo.done === true ).length }
        </span>
      </button>

      <button 
        type="button" 
        className="btn btn-outline-warning mt-3 position-relative"
        onClick={ onShowAllPendingTodo }
      >
        Pendientes
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          { todos.filter( todo => todo.done === false ).length }
        </span>
      </button>

      <button 
        type="button" 
        className="btn btn-outline-danger mt-3 position-relative"
        onClick={ onShowAllTodo }
      >
        Todos
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
          { todos.length }
        </span>
      </button>
    </div>
  )
}
