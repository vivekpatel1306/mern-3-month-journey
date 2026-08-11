import axios from "axios";

const API = "http://localhost:3001/todos";

export const fetchTodos = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addTodo = async (todo) => {
  const res = await axios.post(API, todo);
  return res.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API}/${id}`);
};


// to run server 
// json-server --watch db.json --port 3001