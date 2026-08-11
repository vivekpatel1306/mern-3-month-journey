export const TodoStatus = {
  ALL: 'all',
  COMPLETED: 'completed',
  PENDING: 'pending',
};

export const TodoActionTypes = {
  FETCH_TODOS: 'FETCH_TODOS',
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

// JSDoc type definitions
/**
 * @typedef {Object} Todo
 * @property {string} _id
 * @property {string} title
 * @property {string} [description]
 * @property {boolean} completed
 * @property {string} createdAt
 */