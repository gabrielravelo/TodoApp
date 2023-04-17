
export const TodoEdit = ({ onAddAllTodo, onDeleteAllTodo, onPendingAllTodo }) => {
  return (
    <div className="d-flex">
      <button 
        type="button" 
        className="btn btn-outline-success"
        onClick={ onAddAllTodo }
      >
        Completar todos
      </button>

      <button 
        type="button" 
        className="btn btn-outline-warning"
        onClick={ onPendingAllTodo }
      >
        Marcas todos como pendiente
      </button>

      <button 
        type="button" 
        className="btn btn-outline-danger"
        onClick={ onDeleteAllTodo }
      >
        Eliminar todos
      </button>

    </div>
  )
}
