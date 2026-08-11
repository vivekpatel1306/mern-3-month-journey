const API_URL = '/api';

export const fetchTodos = async () => {
  const response = await fetch(`${API_URL}/todos`);
  const data = await response.json();
  if (!data.success) throw new Error(data.error || 'Failed to fetch todos');
  return data.data;
};

export const createTodo = async (todoData) => {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todoData),
  });
  const data = await response.json();
  if (!data.success) throw new Error(data.error || 'Failed to create todo');
  return data.data;
};

export const updateTodo = async (id, todoData) => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todoData),
  });
  const data = await response.json();
  if (!data.success) throw new Error(data.error || 'Failed to update todo');
  return data.data;
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  if (!data.success) throw new Error(data.error || 'Failed to delete todo');
  return data.data;
};