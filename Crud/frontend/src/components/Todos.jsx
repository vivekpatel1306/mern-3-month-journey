import { useState, useEffect } from "react";
import { API } from "../api/axios";

export const AllTodos = () => {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const fetchTodos = async () => {
    try {
      const response = await API.get("/notes");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/notes", todo);
    fetchTodos();
    setTodo({ title: "", description: "" });
  };


  const handleDelete=async(id)=>{
    console.log(id)
    const to=await API.delete(`/notes/${id}`)
    fetchTodos()
    // console.log(to.data.title)
//   await setTodo({...todo,title:to.data.title,description:to.data.description})
    // await API.put(`/notes/${id}`,todo)
    // console.log("todo :"+todo.title)
  }

  const handleEdit=async(titlee,desc)=>{
setTodo({...todo,title:titlee,description:desc})
  }
const handleUpdate=async(id,title,description)=>{
    const update=await API.put(`/notes/${id}`,todo)
    console.log("Updated")
    fetchTodos()
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="curretTitle"
          value={todo.title}
          placeholder="title"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="description"
          name="currentDesc"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <button type="Submit">Submit</button>
      </form>

      <h1>
        {data.map((d) => (
          <div key={d._id}>
            <p> {d.title}</p>
            <p> {d.description}</p>
            <button onClick={()=>handleDelete(d._id)}>delete</button>
            <button onClick={()=>handleEdit(d.title,d.description)}>edit</button>
            <button onClick={()=>handleUpdate(d._id,d.title,d.description)}>update</button>
          </div>
                   
        ))}
      </h1>
    </>
  );
};
