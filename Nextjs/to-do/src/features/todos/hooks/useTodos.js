"use client"
import { useState, useEffect, useCallback } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../services/todoService';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTodos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTodos();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const addTodo = async (todoData) => {
    try {
      const newTodo = await createTodo(todoData);
      setTodos(prev => [newTodo, ...prev]);
      return newTodo;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const editTodo = async (id, todoData) => {
    try {
      const updated = await updateTodo(id, todoData);
      setTodos(prev => prev.map(todo => todo._id === id ? updated : todo));
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo._id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const toggleComplete = async (id, completed) => {
    return await editTodo(id, { completed: !completed });
  };

  return {
    todos,
    loading,
    error,
    addTodo,
    editTodo,
    removeTodo,
    toggleComplete,
    refreshTodos: loadTodos,
  };
}