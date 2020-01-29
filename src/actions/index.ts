// // import axios from 'axios';
// //

// //
// // export const addTodo = text => ({
// //   id: nextTodoId++,
// //   text,
// //   type: 'ADD_TODO'
// // });
// //

// //
// // export const toggleTodo = id => ({
// //   id,
// //   type: 'TOGGLE_TODO'
// // });
// //
// // export const VisibilityFilters = {
// //   SHOW_ACTIVE: 'SHOW_ACTIVE',
// //   SHOW_ALL: 'SHOW_ALL',
// //   SHOW_COMPLETED: 'SHOW_COMPLETED'
// // }
//
//

let nextTodoId = 0;

import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  DELETE_TODO
} from './types';

import axios from 'axios';

export const setVisibilityFilter = filter => ({
  filter,
  type: 'SET_VISIBILITY_FILTER'
});

export const VisibilityFilters = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

export const addTodo = ({ id: any, text: any, type: any }) => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
        .post(`https://jsonplaceholder.typicode.com/todos`, {
          id: nextTodoId++,
          text,
          type: 'ADD_TODO'
        })
        .then(res => {
          dispatch(addTodoSuccess(res.data));
        })
        .catch(err => {
          dispatch(addTodoFailure(err.message));
        });
  };
};

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

const addTodoStarted = () => ({
  type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error
  }
});


