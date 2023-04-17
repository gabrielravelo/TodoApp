
export const todoReducer = ( initialState = [], action ) => {
  switch ( action.type ) {
    case '[TODO] Add Todo':
      return [ ...initialState, action.payload ];

    case '[TODO] Remove Todo':
      return initialState.filter( todo => todo.id !== action.payload );

    case '[TODO] Toggle Todo':
      return initialState.map( todo => {
        
        if( todo.id === action.payload ) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo;
      });

      case '[TODO] Complete All Todos':
        return initialState.map ( todo => {
          todo.done = true;
          
          return todo;
        });

      case '[TODO] Delete All Todo':
        return initialState = [];

      case '[TODO] Pending All Todos':
        return initialState.map ( todo => {
          todo.done = false;
          
          return todo;
        });

      // TODO: hacer que no se mute el initialState, cuando filtro por completados o pendientes, no puedo volver a ver todos los TODOS (cambia el initialState)
      case '[TODO] Show All Completed Todo':
          return initialState.filter( todo => todo.done === true );

      case '[TODO] Show All Pending Todo':
        return initialState.filter( todo => todo.done === false );

      case '[TODO] Show All Todo':
        return initialState;

    default:
      return initialState;
  }
}
