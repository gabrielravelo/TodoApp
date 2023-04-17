
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

  return (
    <li className={`list-group-item d-flex justify-content-between ${ todo.done ? 'list-group-item-success' : '' }`}>
      <span 
        className={'align-self-center'}
      >
        { todo.description }
      </span>

      <div>
        <button 
          className={`btn ${ todo.done ? 'btn-success' : 'btn-outline-success'}`}
          onClick={ () => onToggleTodo( todo.id ) }
        >
          <i className="ri-check-line"></i>
        </button>
        <button 
          className='btn btn-outline-danger'
          onClick={ () => onDeleteTodo(todo.id) }
        >
          <i className="ri-delete-bin-line"></i>
        </button>
      </div>
    </li>
  )
}
