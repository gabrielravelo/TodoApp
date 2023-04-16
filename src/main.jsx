import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayourEffect/Layout';
// import { Memorize } from './06-memo/Memorize';
// import { MemoHook } from './06-memo/MemoHook';
// import { CallBackHook } from './06-memo/CallBackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
      <TodoApp />
  //</React.StrictMode>,
)
