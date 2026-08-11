import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../api/todoApi";

function TodoForm() {
  const [title, setTitle] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTodo,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });

      setTitle("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      title,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default TodoForm;