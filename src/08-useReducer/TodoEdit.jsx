
export const TodoEdit = ({ onDeleteAllTodo }) => {
  return (
    <div>
      <button 
        type="button" 
        className="btn btn-success"
      >
        Completar todos
      </button>

      <button 
        type="button" 
        className="btn btn-danger"
        onClick={ onDeleteAllTodo }
      >
        Eliminar todos
      </button>
    </div>
  )
}
